import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';
import { LinkProps } from './Link.types';
import Text from '../Text/Text';

describe("Link component", () => {
  let defaultProps: LinkProps;
  beforeEach(() => {
    defaultProps = {
      "data-testid": "link",
      "children": "Example",
    };
  });

  const renderLink = (props: Partial<LinkProps>) => {
    render(<Link {...defaultProps} {...props} />);
  };

  it("Should render a simple link", () => {
    renderLink({ href: "https://example.com", children: "Example" });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render a link with precise color", () => {
    renderLink({ href: "https://example.com", children: "Example", preciseColor: "#ff0000" });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render a link with color", () => {
    renderLink({ href: "https://example.com", children: "Example", color: "#ff0000" });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render a link with custom children", () => {
    renderLink({ href: "https://example.com", children: <Text>Children</Text> });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render a link with underline variant", () => {
    renderLink({ href: "https://example.com", children: "Example", variant: "underline" });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render a link with hover variant", () => {
    renderLink({ href: "https://example.com", children: "Example", variant: "hover" });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render a link with small size", () => {
    renderLink({ href: "https://example.com", children: "Example", size: "small" });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render a link with large size", () => {
    renderLink({ href: "https://example.com", children: "Example", size: "large" });
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });


});