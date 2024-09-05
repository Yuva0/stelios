import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { HeaderProps } from "./Header.types";
import HeaderItem from "./HeaderItem/HeaderItem";
import { HeaderGroup, Text } from "../..";

describe("Header component", () => {
  let defaultProps = {
    children: (
      <HeaderGroup>
        <HeaderItem>Header</HeaderItem>
      </HeaderGroup>
    ),
    "data-testid": "header",
  };

  const renderHeader = (props: Partial<HeaderProps>) => {
    render(<Header {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderHeader({ expandIconProps: { "data-testid": "header-expand-icon" } });
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    const headerExpandIcon = screen.getByTestId("header-expand-icon");
    expect(headerExpandIcon).toBeInTheDocument();

    fireEvent.click(headerExpandIcon);
  });

  it("should render with props", () => {
    renderHeader({ expandable: false });
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should render with custom expand icon", () => {
    renderHeader({
      expandable: true,
      expandIconProps: {
        iconWidth: "3rem",
        iconHeight: "1.75rem",
        iconRight: "5rem",
        iconBottom: "-1.5rem",
      },
    });
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should render header with custom color", () => {
    renderHeader({ color: "red" });
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should render with custom header item", () => {
    render(
      <Header data-testid="header">
        <HeaderItem>
          <Text>Header Item</Text>
        </HeaderItem>
      </Header>
    );

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
