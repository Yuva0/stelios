import * as React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import { BannerProps } from "./Banner.types";
import Text from "../Text/Text";

describe("Banner component", () => {
  let defaultProps: BannerProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "banner",
      "data-leading-icon": "leading-icon",
      title: "Banner Title",
      description: "Banner Description",
    };
  });

  const renderBanner = (props: Partial<BannerProps>) => {
    return render(<Banner {...defaultProps} {...props} />);
  };

  it("Should render an banner with title and description", () => {
    renderBanner({});
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render an banner with title icon", () => {
    renderBanner({ titleIcon: "title-icon" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should rneder an banner with leading icon", () => {
    renderBanner({ leadingIcon: "leading-icon" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should not render an banner when title and description isn't provided", () => {
    renderBanner({ title: null, description: null });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a custom title", () => {
    renderBanner({ title: <Text>Title</Text> });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a red banner", () => {
    renderBanner({ color: "red" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a custom description", () => {
    renderBanner({ description: <Text>Description</Text> });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should not render a title", () => {
    renderBanner({ title: null });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a banner of variant contained", () => {
    renderBanner({ variant: "contained" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a banner of variant outlined", () => {
    renderBanner({ variant: "outlined" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a banner of variant soft", () => {
    renderBanner({ variant: "soft" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a banner of variant outlined-soft", () => {
    renderBanner({ variant: "outlined-soft" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should render a custom width", () => {
    renderBanner({ width: "500px" });
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });
});
