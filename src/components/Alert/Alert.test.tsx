import * as React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert";
import { AlertProps } from "./Alert.types";
import Text from "../Text/Text";

describe("Alert component", () => {
  let defaultProps: AlertProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "alert",
      "data-leading-icon": "leading-icon",
      title: "Alert Title",
      description: "Alert Description",
    };
  });

  const renderAlert = (props: Partial<AlertProps>) => {
    return render(<Alert {...defaultProps} {...props} />);
  };

  it("Should render an alert with title and description", () => {
    renderAlert({});
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render an alert with title icon", () => {
    renderAlert({ titleIcon: "title-icon" });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should rneder an alert with leading icon", () => {
    renderAlert({ leadingIcon: "leading-icon" });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should not render an alert when title and description isn't provided", () => {
    renderAlert({ title: null, description: null });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render a custom title", () => {
    renderAlert({ title: <Text>Title</Text> });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render a custom description", () => {
    renderAlert({ description: <Text>Description</Text> });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should not render a title", () => {
    renderAlert({ title: null });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render a alert of variant contained", () => {
    renderAlert({ variant: "contained" });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render a alert of variant outlined", () => {
    renderAlert({ variant: "outlined" });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render a alert of variant soft", () => {
    renderAlert({ variant: "soft" });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render a alert of variant outlined-soft", () => {
    renderAlert({ variant: "outlined-soft" });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });

  it("Should render a custom width", () => {
    renderAlert({ width: "500px" });
    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });
});
