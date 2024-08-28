import * as React from "react";
import { render, screen } from "@testing-library/react";
import Capsule from "./Capsule";
import { CapsuleProps } from "./Capsule.types";

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
