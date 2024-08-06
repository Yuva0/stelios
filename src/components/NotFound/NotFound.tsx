import * as React from "react";
import Text from "../Text/Text";
import Cone from "../../svg/cone";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
interface NotFoundProps {
  name?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

const StyledNotFoundCtr = styled.div<{ $colorPalette: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${(props) => props.$colorPalette.primary.grayScale[10]};
  background-color: ${(props) => props.$colorPalette.primary.grayScale[0]};
`;

const NotFound: React.FunctionComponent<NotFoundProps> = ({
  name,
  width,
  height,
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
    <StyledNotFoundCtr $colorPalette={colorPalette} style={style}>
      <NotFoundComponent width={width} height={height} />
      <Text variant="h4">Page Not Found</Text>
    </StyledNotFoundCtr>
  );
};

export default NotFound;
