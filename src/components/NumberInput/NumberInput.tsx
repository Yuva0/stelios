import React, { useEffect } from "react";
import Text from "../Text/Text";
import styled from "styled-components";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { NumberInputProps, NumberInputStyleProps } from "./NumberInput.types";
import colorTokens from "../../tokens/colors.json";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette, hasPropertyChain } from "../../helpers/helpers";

const NumberInput = ({
  id,
  placeholder,
  value = 0,
  className,
  style,
  label,
  min = 0,
  max = 100,
  step = 1,
  variant = "contained",
  color = colorTokens.default.primary.main,
  size = "medium",
  disabled,
  onChange,
  onIncrement,
  onDecrement,
}: NumberInputProps) => {
  const [finalValue, setFinalValue] = React.useState<number | undefined>(value);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  useEffect(() => {
    setFinalValue(value);
  }, [value]);

  const NumberInputLabel = () => {
    if (!label || !React.isValidElement(label)) return null;
    return typeof label === "string" ? (
      <Text variant="label" disableColor>
        {label}
      </Text>
    ) : (
      label
    );
  };
  const _onMinusClick = (e: React.MouseEvent) => {
    if (!finalValue) {
      setFinalValue(-1);
    } else {
      setFinalValue(finalValue - 1);
    }

    onDecrement && onDecrement(e, finalValue);
  };
  const _onPlusClick = (e: React.MouseEvent) => {
    if (!finalValue) {
      setFinalValue(1);
    } else {
      setFinalValue(finalValue + 1);
    }

    onIncrement && onIncrement(e, finalValue);
    onChange && onChange(e, finalValue);
  };

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFinalValue(0);
    } else {
      setFinalValue(parseInt(e.target.value));
    }
    onChange && onChange(e, parseInt(e.target.value));
  };

  return (
    <NumberInputContainer id={id} className={className} style={style}>
      <NumberInputLabel />
      <NumberInputContent
        $variant={variant}
        $size={size}
        $colorPalette={colorPalette}
        $color={color}
      >
        <NumberInputIcon
          $variant={variant}
          $position="left"
          $colorPalette={colorPalette}
          $color={color}
          $size={size}
          onClick={_onMinusClick}
        >
          <IconMinus />
        </NumberInputIcon>

        <NumberInputInput
          $variant={variant}
          placeholder={placeholder}
          type="number"
          $size={size}
          $colorPalette={colorPalette}
          $color={color}
          max={max}
          min={min}
          value={finalValue}
          step={step}
          onChange={_onChange}
        />

        <NumberInputIcon
          $variant={variant}
          $position="right"
          $size={size}
          $colorPalette={colorPalette}
          $color={color}
          onClick={_onPlusClick}
        >
          <IconPlus />
        </NumberInputIcon>
      </NumberInputContent>
    </NumberInputContainer>
  );
};

export default NumberInput;

const NumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 0.5rem;
`;
const NumberInputContent = styled.div<NumberInputStyleProps>`
  display: flex;
  flex-direction: row;
`;
const NumberInputIcon = styled.button<NumberInputStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: NumberInputStyleProps) => getSize(props.$size).size};
  height: ${(props: NumberInputStyleProps) => getSize(props.$size).size};
  border-radius: ${(props) =>
    props.$position === "left" ? "4px 0 0 4px" : "0 4px 4px 0"};
  cursor: pointer;
  svg {
    width: ${(props: NumberInputStyleProps) => getSize(props.$size).iconSize};
    height: ${(props: NumberInputStyleProps) => getSize(props.$size).iconSize};
  }
  ${(props) => {
    const variantStyles = variantStyleHandler(
      props.$variant,
      props.$colorPalette,
      props.$color
    );
    return `
      background-color: ${variantStyles.numberInputIcon.backgroundColor.default};
      color: ${variantStyles.numberInputIcon.color.default};
      border: ${variantStyles.numberInputIcon.border.default};

      &:hover {
        background-color: ${variantStyles.numberInputIcon.backgroundColor.hover};
        color: ${variantStyles.numberInputIcon.color.hover};
        border: ${variantStyles.numberInputIcon.border.hover};
      }

      &:active {
        background-color: ${variantStyles.numberInputIcon.backgroundColor.active};
        color: ${variantStyles.numberInputIcon.color.active};
        border: ${variantStyles.numberInputIcon.border.active};
      }
    `;
  }}
`;
const NumberInputInput = styled.input<NumberInputStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Source Sans 3", sans-serif;
  font-size: ${(props) => getSize(props.$size).fontSize};
  width: ${(props) => getSize(props.$size).width};
  height: ${(props) => getSize(props.$size).size};
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
  ${(props) => {
    const variantStyles = variantStyleHandler(
      props.$variant,
      props.$colorPalette,
      props.$color
    );
    return `
      border: ${variantStyles.numberInputInput.border.default};
      ${hasPropertyChain(variantStyles, ["numberInputInput", "borderTop"]) ? `border-top: ${variantStyles.numberInputInput.borderTop!.default};` : ""}
      ${hasPropertyChain(variantStyles, ["numberInputInput", "borderBottom"]) ? `border-bottom: ${variantStyles.numberInputInput.borderBottom!.default};` : ""}
    `;
  }}
`;

const getSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "large":
      return {
        size: "3rem",
        iconSize: "1.5rem",
        width: "5rem",
        fontSize: "1rem",
      };
    case "medium":
      return {
        size: "2.5rem",
        iconSize: "1.25rem",
        width: "5rem",
        fontSize: "1rem",
      };
    case "small":
      return {
        size: "2rem",
        iconSize: "1rem",
        width: "4rem",
        fontSize: "0.875rem",
      };
  }
  return {
    size: "2.5rem",
    iconSize: "1.25rem",
    width: "5rem",
    fontSize: "1rem",
  };
};
const variantStyleHandler = (
  variant: NumberInputStyleProps["$variant"],
  colorPalette: NumberInputStyleProps["$colorPalette"],
  color: NumberInputStyleProps["$color"]
) => {
  switch (variant) {
    case "contained":
      return {
        numberInputIcon: {
          backgroundColor: {
            default: colorPalette[color].accentScale[8],
            hover: colorPalette[color].accentScale[9],
            active: colorPalette[color].accentScale[9],
          },
          color: {
            default: colorPalette[color].accentContrast,
            hover: colorPalette[color].accentContrast,
            active: colorPalette[color].accentContrast,
          },
          border: {
            default: `2px solid ${colorPalette[color].accentScale[8]}`,
            hover: `2px solid ${colorPalette[color].accentScale[9]}`,
            active: `2px solid ${colorPalette[color].accentScale[9]}`,
          },
        },
        numberInputInput: {
          border: {
            default: `2px solid ${colorPalette[color].accentScale[8]}`,
            hover: `2px solid ${colorPalette[color].accentScale[9]}`,
            active: `2px solid ${colorPalette[color].accentScale[9]}`,
          },
        },
      };
    case "outlined":
      return {
        numberInputIcon: {
          backgroundColor: {
            default: "transparent",
            hover: "transparent",
            active: "transparent",
          },
          color: {
            default: colorPalette[color].accentScale[10],
            hover: colorPalette[color].accentScale[10],
            active: colorPalette[color].accentScale[10],
          },
          border: {
            default: `2px solid ${colorPalette[color].accentScale[5]}`,
            hover: `2px solid ${colorPalette[color].accentScale[6]}`,
            active: `2px solid ${colorPalette[color].accentScale[7]}`,
          },
        },
        numberInputInput: {
          border: {
            default: `2px solid transparent`,
            hover: `2px solid transparent`,
            active: `2px solid transparent`,
          },
          borderTop: {
            default: `2px solid ${colorPalette[color].accentScale[5]}`,
            hover: `2px solid ${colorPalette[color].accentScale[6]}`,
            active: `2px solid ${colorPalette[color].accentScale[7]}`,
          },
          borderBottom: {
            default: `2px solid ${colorPalette[color].accentScale[5]}`,
            hover: `2px solid ${colorPalette[color].accentScale[6]}`,
            active: `2px solid ${colorPalette[color].accentScale[7]}`,
          }
        },
      };
    case "soft":
      return {
        numberInputIcon: {
          backgroundColor: {
            default: colorPalette[color].accentScale[2],
            hover: colorPalette[color].accentScale[3],
            active: colorPalette[color].accentScale[3],
          },
          color: {
            default: colorPalette[color].accentScale[10],
            hover: colorPalette[color].accentScale[10],
            active: colorPalette[color].accentScale[10],
          },
          border: {
            default: `2px solid ${colorPalette[color].accentScale[2]}`,
            hover: `2px solid ${colorPalette[color].accentScale[3]}`,
            active: `2px solid ${colorPalette[color].accentScale[3]}`,
          },
        },
        numberInputInput: {
          border: {
            default: `2px solid ${colorPalette[color].accentScale[2]}`,
            hover: `2px solid ${colorPalette[color].accentScale[3]}`,
            active: `2px solid ${colorPalette[color].accentScale[3]}`,
          },
        },
      };
  }
};
