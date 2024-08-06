import * as React from "react";
import Text from "../Text/Text";
import Cone from "../../svg/cone";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
interface NotFoundProps {
  name?: string;
  width?: string;
  iconWidth?: string;
  height?: string;
  iconHeight?: string;
  style?: React.CSSProperties;
}

interface NotFoundStyleProps {
  $colorPalette: any;
  $width: string;
  $height: string;
}

const StyledNotFoundCtr = styled.div<NotFoundStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  color: ${(props) => props.$colorPalette.primary.grayScale[10]};
  background-color: ${(props) => props.$colorPalette.primary.grayScale[0]};
`;

const NotFound: React.FunctionComponent<NotFoundProps> = ({
  name,
  width = "800px",
  iconWidth,
  height = "800px",
  iconHeight,
  style,
}) => {
  const colorPalette = useTheme().theme.colorPalette;

  let NotFoundComponent = null;
  switch (name) {
    case "Cone":
      NotFoundComponent = Cone;
      break;
    default:
      NotFoundComponent = Cone;
  }

  return (
    <StyledNotFoundCtr
      $width={width}
      $height={height}
      $colorPalette={colorPalette}
      style={style}
    >
      <NotFoundComponent width={iconWidth} height={iconHeight} />
      <Text variant="h4">Page Not Found</Text>
    </StyledNotFoundCtr>
  );
};

export default NotFound;
