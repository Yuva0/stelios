import * as React from "react";
import styled, { css } from "styled-components";
import { TabProps, TabPvtProps, TabStyleProps } from "./Tab.types";
import Text from "../Text/Text";
import colorTokens from "../../tokens/colors.json";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";

const Tab: React.FC<TabProps> = ({
  variant = "contained",
  label,
  value,
  selected = false,
  color = colorTokens.default.primary.main,
  pvtOnClick,
}: TabProps & TabPvtProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const Label = (() => {
    if (!label) return null;
    return typeof label === "string" ? (
      <Text
        disableColor
        style={{
          overflow: "hidden",
          width: "100%",
          textWrap: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </Text>
    ) : (
      label
    );
  })();

  const _onClickHandler = () => {
    pvtOnClick && pvtOnClick(value);
  };

  return (
    <StyledTab
      $variant={variant}
      $selected={selected}
      $colorPalette={colorPalette}
      $color={color}
      onClick={_onClickHandler}
    >
      {Label}
    </StyledTab>
  );
};
export default Tab;
Tab.displayName = "Tab";

const StyledTab = styled.button<TabStyleProps>`
  display: flex;
  flex: 1 1 0;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  flex-direction: column;
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${(props) => getVariantStyleProps(props)}
`;
const getVariantStyleProps = (props: TabStyleProps) => {
  switch (props.$variant) {
    case "contained":
      return css`
        background-color: ${props.$selected
          ? props.$colorPalette[props.$color].accentScale[8]
          : props.$colorPalette[props.$color].accentScale[2]};
        color: ${props.$selected
          ? props.$colorPalette[props.$color].accentContrast
          : props.$colorPalette[props.$color].accentScale[11]};
        border: 2px solid
          ${props.$selected
            ? props.$colorPalette[props.$color].accentScale[8]
            : props.$colorPalette[props.$color].accentScale[2]};
      `;
    case "outlined":
      return css`
        background-color: ${props.$selected
          ? props.$colorPalette[props.$color].accentScale[1]
          : props.$colorPalette[props.$color].accentScale[1]};
        color: ${props.$selected
          ? props.$colorPalette[props.$color].accentScale[10]
          : props.$colorPalette[props.$color].accentScale[10]};
        border: 2px solid
          ${props.$selected
            ? props.$colorPalette[props.$color].accentScale[7]
            : "transparent"};
      `;
  }
};
