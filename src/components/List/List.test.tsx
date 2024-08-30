import * as React from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";
import { ListProps } from "./List.types";
import ListItem from "./ListItem/ListItem";
import Text from "../Text/Text";

describe("List component", () => {
  let defaultProps: Partial<ListProps>;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "list",
    };
  });

  const renderListWithItems = (props: Partial<ListProps>) => {
    render(
      <List {...defaultProps} {...props}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    );
  };

  it("should render without crashing", () => {
    renderListWithItems({});
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });

  it("should render with props", () => {
    renderListWithItems({
      title: "Title",
      variant: "unordered",
      size: "small",
      containerStyle: { color: "red" },
      color: "red",
    });
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });

  it("should render with custom list", () => {
    render(<List data-testid="list">test</List>);
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  })
  it("should render with custom listitem", () => {
    render(<List data-testid="list"><ListItem><Text>List Item 1</Text></ListItem></List>);
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  })

  it("should render an ordered list", () => {
    renderListWithItems({ variant: "ordered" });
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });

  it("should render an unordered list", () => {
    renderListWithItems({ variant: "unordered" });
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });

  it("should render an variant as none", () => {
    renderListWithItems({ variant: "none" });
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });

  
});
