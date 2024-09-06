import * as React from "react";
import Text from "../Text/Text";
import Cone from "../../svg/Cone";
import FileError404 from "../../svg/FileError404";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";
import { NotFoundProps, NotFoundStyleProps } from "./NotFound.types";

const NotFound: React.FunctionComponent<NotFoundProps> = ({
  name,
  width = "800px",
  iconWidth,
  height = "800px",
  iconHeight,
  style,
  notFoundText = "Page Not Found",
  color = colorTokens.default.primary.main,
  className,
  "data-testid": dataTestId,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);

  let NotFoundComponent = null;
  switch (name) {
    case "Cone":
      NotFoundComponent = Cone;
      break;
    case "File_Error_404":
      NotFoundComponent = FileError404;
      break;
    default:
      NotFoundComponent = Cone;
  }

  const NotFoundElement =
    typeof notFoundText === "string" ? (
      <Text disableColor variant="h4">{notFoundText}</Text>
    ) : (
      notFoundText
    );

  return (
    <StyledNotFoundCtr
      $width={width}
      $height={height}
      $colorPalette={colorPalette}
      $color={color}
      style={style}
      data-testid={dataTestId}
      className={className}
      {...props}
    >
      <NotFoundComponent width={iconWidth} height={iconHeight} />
      {NotFoundElement}
    </StyledNotFoundCtr>
  );
};
export default NotFound;

const StyledNotFoundCtr = styled.div<NotFoundStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  color: ${(props) => props.$colorPalette[props.$color].grayScale[11]};
  background-color: ${(props) => "transparent"};
`;