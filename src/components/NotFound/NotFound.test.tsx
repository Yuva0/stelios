import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { NotFoundProps } from './NotFound.types';
import Text from '../Text/Text';

describe('NotFound component', () => {
  let defaultProps: NotFoundProps;

  beforeEach(() => {
    defaultProps = {
      'data-testid': 'not-found',
    };
  });

  const renderNotFound = (props: Partial<NotFoundProps>) => {
    render(<NotFound {...defaultProps} {...props} />);
  };

  it('should render without crashing', () => {
    renderNotFound({});
    const notFound = screen.getByTestId('not-found');
    expect(notFound).toBeInTheDocument();
  });

  it('should render with props', () => {
    renderNotFound({
      name: 'Cone',
      color: 'red',
      style: { color: 'red' },
      width: '10rem',
      height: '10rem',
      className: 'not-found',
    });
    const notFound = screen.getByTestId('not-found');
    expect(notFound).toBeInTheDocument();
  });

  it('should render File_Error_404', () => {
    renderNotFound({
      name: 'File_Error_404',
      notFoundText: <Text>Not Found</Text>,
    });
    const notFound = screen.getByTestId('not-found');
    expect(notFound).toBeInTheDocument();
  });
});