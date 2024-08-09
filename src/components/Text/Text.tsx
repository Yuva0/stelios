import React from "react";
import { createGlobalStyle } from "styled-components";
import { TextProps, TextStyleProps } from "./Text.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
`;

const commonStyles = `
  padding: 0;
  margin: 0;
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `'Varela Round', sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `'Varela Round', sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  font-family: ${(props) => props.$fontFamily ?? `'Varela Round', sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  font-weight: ${(props) => (props.$strong ? "700" : "400")};
  display: flex;
  align-items: center;
  font-family: ${(props) => props.$fontFamily ?? `'Varela Round', sans-serif`};
  ${(props) => !props.$noColor && `color: ${props.$color};`}
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
  noColor = false,
  fontSize,
  lineHeight,
  style,
  className,
  fontFamily,
  ...rest
}: TextProps) => {
  const colorPalette = useTheme().theme.colorPalette;
  const _color = color
    ? colorPalette[color].main
    : colorPalette.primary.grayScale[11];
  const _styleProps = { $noColor: noColor, $color: _color };

  const _Text = () => {
    switch (variant) {
      case "h1":
        return (
          <StyledH1
            $strong={strong}
            $align={align}
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
          >
            {children}
          </StyledH1>
        );
      case "h2":
        return (
          <StyledH2
            $strong={strong}
            $align={align}
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
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
            $wrap={wrap}
            $size={size}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
            style={style}
            className={className}
            {...rest}
            {..._styleProps}
          >
            {children}
          </StyledDiv>
        );
    }
  };

  return (
    <>
      <GlobalStyle />
      {_Text()}
    </>
  );
};

export default Text;
