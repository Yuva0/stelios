import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Capsule from "./Capsule";
import { CapsuleProps } from "./Capsule.types";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

describe("Capsule Component", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "capsule",
      image: "https://via.placeholder.com/150",
      imageAlt: "placeholder",
      title: "Title",
      description: "Description",
      onClick: jest.fn(),
    };
  });

  const renderCapsule = (props: Partial<CapsuleProps>) => {
    return render(<Capsule {...defaultProps} {...props} />);
  };

  const renderDarkThemeCapsule = (props: Partial<CapsuleProps>) => {
    return render(<ThemeProvider appearance="dark" accents={{primary: "red"}}>
      <Capsule color="primary" {...defaultProps} {...props} />
    </ThemeProvider>);
  };

  it("Should render a capsule with title and description", () => {
    renderCapsule({});
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with title only", () => {
    renderCapsule({ description: "" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with description only", () => {
    renderCapsule({ title: "" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with neither title nor description", () => {
    renderCapsule({ title: "", description: "" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with custom color", () => {
    renderCapsule({ color: "red" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with contained variant", () => {
    renderCapsule({ variant: "contained" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with outlined variant", () => {
    renderCapsule({ variant: "outlined" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with soft variant", () => {
    renderCapsule({ variant: "soft" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with neumorph variant", () => {
    renderCapsule({ variant: "neumorph" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with outlined-soft variant", () => {
    renderCapsule({ variant: "outlined-soft" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a dark theme capsule", () => {
    renderDarkThemeCapsule({ variant: "neumorph" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });
  it("Should render a dark theme clickable capsule", () => {
    renderDarkThemeCapsule({ onClick: jest.fn(), clickable: true, variant: "neumorph" });
    const capsule = screen.getByTestId("capsule");
    fireEvent.click(capsule);
  });

  it("Should render a clickable contained capsule", () => {
    renderCapsule({ onClick: jest.fn(), clickable: true, variant: "contained" });
    const capsule = screen.getByTestId("capsule");
    fireEvent.click(capsule);
  });
  it("Should render a clickable outlined capsule", () => {
    renderCapsule({ onClick: jest.fn(), clickable: true, variant: "outlined" });
    const capsule = screen.getByTestId("capsule");
    fireEvent.click(capsule);
  });
  it("Should render a clickable soft capsule", () => {
    renderCapsule({ onClick: jest.fn(), clickable: true, variant: "soft" });
    const capsule = screen.getByTestId("capsule");
    fireEvent.click(capsule);
  });
  it("Should render a clickable neumorph capsule", () => {
    renderCapsule({ onClick: jest.fn(), clickable: true, variant: "neumorph" });
    const capsule = screen.getByTestId("capsule");
    fireEvent.click(capsule);
  });
  it("Should render a clickable outlined-soft capsule", () => {
    renderCapsule({ onClick: jest.fn(), clickable: true, variant: "outlined-soft" });
    const capsule = screen.getByTestId("capsule");
    fireEvent.click(capsule);
  });

  it("Should render a capsule with left image position", () => {
    renderCapsule({ imagePosition: "left" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with right image position", () => {
    renderCapsule({ imagePosition: "right" });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with custom textProps padding", () => {
    renderCapsule({ textProps: { padding: "1rem" } });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with custom width", () => {
    renderCapsule({ width:"1rem"  });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });

  it("Should render a capsule with custom height", () => {
    renderCapsule({ height:"1rem"  });
    const capsule = screen.getByTestId("capsule");
    expect(capsule).toBeInTheDocument();
  });
});
