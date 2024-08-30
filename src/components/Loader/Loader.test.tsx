import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import { LoaderProps } from './Loader.types';

describe('Loader component', () => {
  let defaultProps: LoaderProps;

  beforeEach(() => {
    defaultProps = {
      'data-testid': 'loader',
    };
  });

  const renderLoader = (props: Partial<LoaderProps>) => {
    render(<Loader {...defaultProps} {...props} />);
  };

  it('should render without crashing', () => {
    renderLoader({});
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render with props', () => {
    renderLoader({
      shape: 'circle',
      height: '3rem',
      width: '3rem',
      borderRadius: '50%',
      color: 'red',
      style: { color: 'red' },
      className: 'loader',
      startTime: 1,
    });
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it("should render a circle loader", () => {
    renderLoader({ shape: "circle" });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a square loader", () => {
    renderLoader({ shape: "square" });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a rectangle loader", () => {
    renderLoader({ shape: "rectangle" });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a loader with height", () => {
    renderLoader({ height: "3rem" });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a loader with width", () => {
    renderLoader({ width: "3rem" });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a loader with border radius", () => {
    renderLoader({ borderRadius: "50%" });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a loader with style", () => {
    renderLoader({ style: { color: "red" } });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a loader with color", () => {
    renderLoader({ color: "red" });
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});