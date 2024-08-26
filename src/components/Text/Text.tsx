import React from "react";
import styled from "styled-components";
import { TextProps, TextStyleProps } from "./Text.types";
import { Helmet } from "react-helmet";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

interface StyledProps {
  $disableColor?: boolean;
  $color?: string;
}

const Text = ({
  variant = "div",
  strong,
  children,
  align = "center",
  color = colorTokens.default.primary.main,
  preciseColor,
  wrap = false,
  size = "medium",
  disableColor = false,
  fontSize,
  lineHeight,
  style,
  className,
  fontFamily,
  ...rest
}: TextProps) => {
  const theme = useTheme().theme;
  let _styledProps: StyledProps;
  if (disableColor) {
    _styledProps = { $disableColor: disableColor };
  } else {
    const colorPalette = getColorPalette(theme, color);
    const _color = preciseColor ?? (color && colorPalette
      ? colorPalette[color].accentScale[10]
      : color);
    _styledProps = { $disableColor: disableColor, $color: _color };
  }

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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
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
            {..._styledProps}
          >
            {children}
          </StyledDiv>
        );
    }
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {_Text()}
    </>
  );
};
export default Text;

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
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  font-family: ${(props) => props.$fontFamily ?? `"Lato", sans-serif`};
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  font-family: ${(props) => props.$fontFamily ?? `'Varela Round', sans-serif`};
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
  ${commonStyles}
`;
const StyledLabel = styled.label<TextStyleProps>`
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
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
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
  font-family: ${(props) => props.$fontFamily ?? `'Varela Round', sans-serif`};
  ${(props) => !props.$disableColor && `color: ${props.$color};`}
  ${commonStyles}
`;
