import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ImageHighlight from './ImageHighlight';
import { ImageHighlightProps } from './ImageHighlight.types';

describe('ImageHighlight component', () => {
  let defaultProps: ImageHighlightProps;

  beforeEach(() => {
    defaultProps = {
      imgSrc: 'https://via.placeholder.com/150',
      imgAlt: 'image',
      'data-testid': 'image-highlight',
    };
  });

  const renderImageHighlight = (props: Partial<ImageHighlightProps>) => {
    render(<ImageHighlight {...defaultProps} {...props} />);
  };

  it('should render without crashing', () => {
    renderImageHighlight({});
    const imageHighlight = screen.getByTestId('image-highlight');
    expect(imageHighlight).toBeInTheDocument();
  });

  it('should render with props', () => {
    renderImageHighlight({
      gradientColors: ['red', 'blue'],
      color: 'red',
    });
    const imageHighlight = screen.getByTestId('image-highlight');
    expect(imageHighlight).toBeInTheDocument();
  });
});