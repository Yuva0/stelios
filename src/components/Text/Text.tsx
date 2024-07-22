import React from "react";
import { TextProps, TextStyleProps } from "./Text.types";
import styled, { createGlobalStyle } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

  body {
    font-family: "Lato", sans-serif;
  }
`;
const commonStyles = `
  font-family: "Lato", sans-serif;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const StyledH1 = styled.h1<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "2.5rem"
      : props.$size === "medium"
        ? "2.25rem"
        : "2rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$lineHeight === "large"
      ? "4rem"
      : props.$size === "medium"
        ? "3.5rem"
        : "3rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledH2 = styled.h2<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "2.25rem"
      : props.$size === "medium"
        ? "2rem"
        : "1.75rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "3.5rem"
      : props.$size === "medium"
        ? "3rem"
        : "2.5rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledH3 = styled.h3<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "2rem"
      : props.$size === "medium"
        ? "1.75rem"
        : "1.5rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "3rem"
      : props.$size === "medium"
        ? "2.5rem"
        : "2rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledH4 = styled.h4<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "1.75rem"
      : props.$size === "medium"
        ? "1.5rem"
        : "1.25rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "2.5rem"
      : props.$size === "medium"
        ? "2rem"
        : "1.75rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledH5 = styled.h5<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "1.5rem"
      : props.$size === "medium"
        ? "1.25rem"
        : "1rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "2rem"
      : props.$size === "medium"
        ? "1.75rem"
        : "1.5rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) => {
    return props.$color ?? props.$paletteColors?.primary.grayScale[11];
  }};
  ${commonStyles}
`;
const StyledH6 = styled.h6<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "1.25rem"
      : props.$size === "medium"
        ? "1rem"
        : "0.875rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "1.75rem"
      : props.$size === "medium"
        ? "1.5rem"
        : "1.25rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledDiv = styled.div<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "1.25rem"
      : props.$size === "medium"
        ? "1rem"
        : "0.875rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "1.75rem"
      : props.$size === "medium"
        ? "1.5rem"
        : "1.25rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledLabel = styled.label<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "1.25rem"
      : props.$size === "medium"
        ? "1rem"
        : "0.75rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "1.75rem"
      : props.$size === "medium"
        ? "1.5rem"
        : "1.25rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledSpan = styled.span<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "1.25rem"
      : props.$size === "medium"
        ? "1rem"
        : "0.875rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "1.75rem"
      : props.$size === "medium"
        ? "1.5rem"
        : "1.25rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;
const StyledP = styled.p<TextStyleProps>`
  font-size: ${(props) =>
    props.$fontSize ?? props.$size === "large"
      ? "1.25rem"
      : props.$size === "medium"
        ? "1rem"
        : "0.875rem"};
  line-height: ${(props) =>
    props.$lineHeight ?? props.$size === "large"
      ? "1.75rem"
      : props.$size === "medium"
        ? "1.5rem"
        : "1.25rem"};
  font-weight: ${(props: TextStyleProps) => (props.$strong ? "700" : "400")};
  color: ${(props: TextStyleProps) =>
    props.$color ?? props.$paletteColors?.primary.grayScale[11]};
  ${commonStyles}
`;

const Text = ({
  variant = "div",
  strong,
  children,
  align = "center",
  color,
  wrap = false,
  size = "medium",
  fontSize,
  lineHeight,
  style,
  className,
  ...rest
}: TextProps) => {
  const paletteColors = useTheme().theme.paletteColors;
  rest = { ...rest, $paletteColors: paletteColors };

  switch (variant) {
    case "h1":
      return (
        <StyledH1
          $paletteColors={paletteColors}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledH1>
      );
    case "h2":
      return (
        <StyledH2
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledH2>
      );
    case "h3":
      return (
        <StyledH3
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledH3>
      );
    case "h4":
      return (
        <StyledH4
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledH4>
      );
    case "h5":
      return (
        <StyledH5
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledH5>
      );
    case "h6":
      return (
        <StyledH6
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledH6>
      );
    case "div":
      return (
        <StyledDiv
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledDiv>
      );
    case "paragraph":
      return (
        <StyledP
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledP>
      );
    case "label":
      return (
        <StyledLabel
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledLabel>
      );
    case "span":
      return (
        <StyledSpan
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledSpan>
      );
    default:
      return (
        <StyledDiv
          $variant={variant}
          $strong={strong}
          $align={align}
          $color={color}
          $wrap={wrap}
          $size={size}
          $fontSize={fontSize}
          $lineHeight={lineHeight}
          style={style}
          className={className}
          {...rest}
        >
          {children}
        </StyledDiv>
      );
  }
};

export default Text;
