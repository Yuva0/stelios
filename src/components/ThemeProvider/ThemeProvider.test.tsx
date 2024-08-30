import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme, useUpdateTheme } from './ThemeProvider';
import Button from '../Button/Button';
import { ButtonProps } from '../Button/Button.types';

const Component = () => {
  const updateTheme = useUpdateTheme();
  const {theme, setTheme} = useTheme();

  const _onClick = () => {
    updateTheme({
      accents: {
        primary: "blue",
      },
      gray: "gray",
      appearance: "dark",
    });
  };
  
  return (
    <Button color="red" onClick={_onClick} data-testid='button'/> 
  )

};

describe("ThemeProvider component", () => {
  const renderButton = (props: Partial<ButtonProps>) => {
    render(
      <ThemeProvider accents={{primary: "red"}} appearance='light'>
        <Component/>
      </ThemeProvider>
    )
  }

  it("Should render a themed button", () => {
    renderButton({});
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
});