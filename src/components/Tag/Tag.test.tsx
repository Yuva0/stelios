import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';
import { TagProps } from './Tag.types';
import { IconCheck } from '@tabler/icons-react';

describe('Tag component', () => {
  let defaultProps = {
    "data-testid": "tag",
  }

  const renderTag = (props: Partial<TagProps>) => {
    render(<Tag {...defaultProps} {...props} />);
  }

  it("render a tag", () => {
    renderTag({});
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a tag with children", () => {
    renderTag({
      children: "Tag",
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a tag with leading icon", () => {
    renderTag({
      leadingIcon: <IconCheck/>,
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a tag with trailing icon", () => {
    renderTag({
      trailingIcon: <IconCheck/>,
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a tag with onClick", () => {
    renderTag({
      onClick: () => {},
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
    tagElement.click()
  });

  it("render a small tag", () => {
    renderTag({
      size: "small",
      leadingIcon: <IconCheck/>,
      trailingIcon: <IconCheck/>,
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a medium tag", () => {
    renderTag({
      size: "medium",
      trailingIcon: <IconCheck/>,
      leadingIcon: <IconCheck/>,
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a red tag", () => {
    renderTag({
      color: "red"
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  })

  it("render a large tag", () => {
    renderTag({
      size: "large",
      leadingIcon: <IconCheck/>,
      trailingIcon: <IconCheck/>,
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a tag with disable click", () => {
    renderTag({
      disableClick: true,
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a contained tag", () => {
    renderTag({
      variant: "contained",
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("render a outlined tag", () => {
    renderTag({
      variant: "outlined",
    });
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toBeInTheDocument();
  });

});