import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import Text from "../Text/Text";
import { CardProps } from "./Card.types";

describe("Card", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "card",
      children: <Text size="large">Text component</Text>,
    };
  });

  const renderCard = (props: Partial<CardProps>) => {
    render(<Card {...defaultProps} {...props} />);
  };

  it("render a simple card", () => {
    renderCard({});
    const card = screen.getByTestId("card");

    expect(card).toBeInTheDocument();
  });

  it("renders with header", () => {
    renderCard({ header: <div>Header</div> });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("renders with footer", () => {
    renderCard({ footer: <div>footer</div> });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("renders with custom width", () => {
    const customWidth = "600px";
    renderCard({ width: customWidth });
    const card = screen.getByTestId("card");
    expect(card).toHaveStyle(`width: ${customWidth}`);
  });
  it("renders with custom className", () => {
    const customClassName = "custom-card";
    renderCard({ className: customClassName });
    const card = screen.getByTestId("card");
    expect(card).toHaveClass(customClassName);
  });
  it("renders with custom style", () => {
    const customStyle = { backgroundColor: "red" };
    renderCard({ style: customStyle });
    const card = screen.getByTestId("card");
    expect(card).toHaveStyle(customStyle);
  });
  it("renders with children", () => {
    renderCard({ children: "Custom Children" });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("render with variant contained", () => {
    renderCard({ variant: "contained" });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("render with variant outlined", () => {
    renderCard({ variant: "outlined" });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("render with variant soft", () => {
    renderCard({ variant: "soft" });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("render with variant outlined-soft", () => {
    renderCard({ variant: "outlined-soft" });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("render with variant neumorph", () => {
    renderCard({ variant: "neumorph" });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
  it("render with color red", () => {
    renderCard({ color: "red" });
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
});
