import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem/AccordionItem";
import { AccordionProps } from "./Accordion.types";
import Text from "../Text/Text";

describe("Accordion component", () => {
  let defaultProps: AccordionProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "accordion",
      children: [
        <AccordionItem
          title="Accordion Item 1"
          key="1"
          data-testid="accordion-item-1"
          data-testid-title="accordion-item-1-title"
        >
          Accordion Item 1 Content
        </AccordionItem>,
        <AccordionItem
          title="Accordion Item 2"
          key="2"
          data-testid="accordion-item-2"
        >
          Accordion Item 2 Content
        </AccordionItem>,
        <AccordionItem
          title={<Text>Accordion Item 3</Text>}
          key="3"
          data-testid="accordion-item-3"
          data-testid-title = "accordion-item-3-title"
        >
          <Text>Accordion Item 3 Content</Text>
        </AccordionItem>,
      ],
    };
  });

  const renderAccordion = (props: Partial<AccordionProps>) => {
    return render(<Accordion {...defaultProps} {...props} />);
  };

  it("Should render an accordion with children", () => {
    renderAccordion({});
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
  });

  it("Should render an accordion with variant outlined and expand it along with custom children expand", () => {
    renderAccordion({ variant: "outlined" });
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
    const accordionItem1 = screen.getByTestId("accordion-item-1");
    expect(accordionItem1).toBeInTheDocument();
    const accordionItem1Title = screen.getByTestId("accordion-item-1-title");
    expect(accordionItem1Title).toBeInTheDocument();
    const accordionItem3 = screen.getByTestId("accordion-item-3");
    expect(accordionItem3).toBeInTheDocument();
    const accordionItem3Title = screen.getByTestId("accordion-item-3-title");
    expect(accordionItem3Title).toBeInTheDocument();

    fireEvent.click(accordionItem1Title);
    expect(accordionItem1).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(accordionItem3Title);
    expect(accordionItem3).toHaveAttribute("aria-expanded", "true");
  });

  it("Should render an accordion with variant soft and expand it", () => {
    renderAccordion({ variant: "soft" });
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
    const accordionItem1 = screen.getByTestId("accordion-item-1");
    expect(accordionItem1).toBeInTheDocument();
    const accordionItem1Title = screen.getByTestId("accordion-item-1-title");
    expect(accordionItem1Title).toBeInTheDocument();

    fireEvent.click(accordionItem1Title);
    expect(accordionItem1).toHaveAttribute("aria-expanded", "true");
  });

  it("Should render an accordion with variant outlined-soft and expand it", () => {
    renderAccordion({ variant: "outlined-soft" });
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
    const accordionItem1 = screen.getByTestId("accordion-item-1");
    expect(accordionItem1).toBeInTheDocument();
    const accordionItem1Title = screen.getByTestId("accordion-item-1-title");
    expect(accordionItem1Title).toBeInTheDocument();

    fireEvent.click(accordionItem1Title);
    expect(accordionItem1).toHaveAttribute("aria-expanded", "true");
  });

  it("Should render an accordion with custom color and expand it", () => {
    renderAccordion({ color: "red" });
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
    const accordionItem1 = screen.getByTestId("accordion-item-1");
    expect(accordionItem1).toBeInTheDocument();
    const accordionItem1Title = screen.getByTestId("accordion-item-1-title");
    expect(accordionItem1Title).toBeInTheDocument();

    fireEvent.click(accordionItem1Title);
    expect(accordionItem1).toHaveAttribute("aria-expanded", "true");

  });

  it("Should render an accordion with custom width", () => {
    renderAccordion({ width: "200px" });
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
    const accordionItem1 = screen.getByTestId("accordion-item-1");
    expect(accordionItem1).toBeInTheDocument();
    const accordionItem1Title = screen.getByTestId("accordion-item-1-title");
    expect(accordionItem1Title).toBeInTheDocument();

    fireEvent.click(accordionItem1Title);
    expect(accordionItem1).toHaveAttribute("aria-expanded", "true");
  });

  it("Should render an accordion with full width", () => {
    renderAccordion({ isFullWidth: true });
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
    const accordionItem1 = screen.getByTestId("accordion-item-1");
    expect(accordionItem1).toBeInTheDocument();
    const accordionItem1Title = screen.getByTestId("accordion-item-1-title");
    expect(accordionItem1Title).toBeInTheDocument();

    fireEvent.click(accordionItem1Title);
    expect(accordionItem1).toHaveAttribute("aria-expanded", "true");
  });

  it("Should render an accordion with item and expand the first item", () => {
    renderAccordion({});
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toBeInTheDocument();
    const accordionItem1 = screen.getByTestId("accordion-item-1");
    expect(accordionItem1).toBeInTheDocument();
    const accordionItem1Title = screen.getByTestId("accordion-item-1-title");
    expect(accordionItem1Title).toBeInTheDocument();

    fireEvent.click(accordionItem1Title);
    expect(accordionItem1).toHaveAttribute("aria-expanded", "true");
  });

  // Edge cases
  it("Edge: Should render an accordion item by itself", () => {
    render(
      <AccordionItem data-testid="accordion-item" title="Accordion Item 1">
        Accordion Item 1 Content
      </AccordionItem>
    );
    const accordion = screen.getByTestId("accordion-item");
    expect(accordion).toBeInTheDocument();
  });

  it("Edge: Should render an accordion with no title", () => {
    render(
      <AccordionItem data-testid="accordion-item">
        Accordion Item 1 Content
      </AccordionItem>
    );
    const accordion = screen.getByTestId("accordion-item");
    expect(accordion).toBeInTheDocument();
  });

  it("Edge: Add string inside accordion", () => {
    render(
      <Accordion data-testid="accordion">test</Accordion>
    )
    const accordionId = screen.getByTestId("accordion");
    expect(accordionId).toBeInTheDocument();
  });
});
