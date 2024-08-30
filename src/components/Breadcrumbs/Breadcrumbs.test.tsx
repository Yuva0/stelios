import * as React from "react";
import { render, screen } from "@testing-library/react";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbsItem from "./BreadcrumbsItem/BreadcrumbsItem";

describe("Breadcrumbs Testcases", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "breadcrumbs",
      children: [
        <BreadcrumbsItem
          title="Breadcrumbs Item 1"
          data-testid="breadcrumbs-item-1"
        />,
        <BreadcrumbsItem
          title="Breadcrumbs Item 2"
          data-testid="breadcrumbs-item-2"
        />,
      ],
    };
  });

  const renderBreadcrumbs = (props: Partial<BreadcrumbsProps>) => {
    return render(<Breadcrumbs {...defaultProps} {...props} />);
  };

  it("Render a simple Breadcrumbs", () => {
    renderBreadcrumbs({});
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a Breadcrumbs with custom delimiter", () => {
    renderBreadcrumbs({ delimiter: ">>" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a large Breadcrumbs", () => {
    renderBreadcrumbs({ size: "large" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a small Breadcrumbs", () => {
    renderBreadcrumbs({ size: "small" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a Breadcrumbs with custom color", () => {
    renderBreadcrumbs({ color: "red" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a breacrumbs of variant contained", () => {
    renderBreadcrumbs({ variant: "contained" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a breacrumbs of variant outlined", () => {
    renderBreadcrumbs({ variant: "outlined" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a breacrumbs of variant soft", () => {
    renderBreadcrumbs({ variant: "soft" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a breacrumbs of variant text", () => {
    renderBreadcrumbs({ variant: "text" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Render a breacrumbs with custom breadcrumbs item", () => {
    renderBreadcrumbs({
      children: [
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-1"
          title="Breadcrumbs Item 1"
          color="red"
          size="large"
          variant="contained"
        />,
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-2"
          title="Breadcrumbs Item 2"
          size="medium"
          variant="outlined"
        />,
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-3"
          title="Breadcrumbs Item 3"
          size="small"
          variant="soft"
        />,
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-4"
          title="Breadcrumbs Item 4"
          variant="text"
        />,
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-5"
          title="Breadcrumbs Item 5"
          variant="text"
          link="custom-link"
        />,
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-5"
          title="Breadcrumbs Item 5"
          variant="contained"
          link="custom-link"
        />,
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-5"
          title="Breadcrumbs Item 5"
          variant="outlined"
          link="custom-link"
        />,
        <BreadcrumbsItem
          data-testid="breadcrumbs-item-5"
          title="Breadcrumbs Item 5"
          variant="soft"
          link="custom-link"
        />,
      ],
    });
    const breadcrumbs = screen.getByTestId("breadcrumbs");
    const breadcrumbsItem1 = screen.getByTestId("breadcrumbs-item-1");
    const breadcrumbsItem2 = screen.getByTestId("breadcrumbs-item-2");
    const breadcrumbsItem3 = screen.getByTestId("breadcrumbs-item-3");
    const breadcrumbsItem4 = screen.getByTestId("breadcrumbs-item-4");

    expect(breadcrumbs).toBeInTheDocument();
    expect(breadcrumbsItem1).toBeInTheDocument();
    expect(breadcrumbsItem2).toBeInTheDocument();
    expect(breadcrumbsItem3).toBeInTheDocument();
    expect(breadcrumbsItem4).toBeInTheDocument();
  });

  it("Edge: Render a Breadcrumbs with children as string", () => {
    renderBreadcrumbs({ children: "Breadcrumbs Item 1" });
    const breadcrumbs = screen.getByTestId("breadcrumbs");

    expect(breadcrumbs).toBeInTheDocument();
  });

  it("Edge: Render only breadcrumbs item", () => {
    render(<BreadcrumbsItem title="Breadcrumbs Item 1" data-testid="breadcrumbs-item-1" />);
    const breadcrumbsItem = screen.getByTestId("breadcrumbs-item-1");
    expect(breadcrumbsItem).toBeInTheDocument();

  });
});
