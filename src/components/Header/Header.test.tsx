import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { HeaderProps } from "./Header.types";
import HeaderItem from "./HeaderItem/HeaderItem";
import { HeaderGroup } from "../..";

describe("Header component", () => {
  let defaultProps = {
    children: (
      <HeaderGroup>
        <HeaderItem>Header</HeaderItem>
      </HeaderGroup>
    ),
    "data-testid": "header",
    "data-testid-icon": "header-expand-icon"
  };

  const renderHeader = (props: Partial<HeaderProps>) => {
    render(<Header {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderHeader({});
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    const headerExpandIcon = screen.getByTestId("header-expand-icon");
    expect(headerExpandIcon).toBeInTheDocument()

    fireEvent.click(headerExpandIcon);
  });

  it("should render with props", () => {
    renderHeader({expandable: false, });
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();

    const headerExpandIcon = screen.getByTestId("header-expand-icon");
    expect(headerExpandIcon).toBeInTheDocument()

    fireEvent.click(headerExpandIcon);
  });
});
