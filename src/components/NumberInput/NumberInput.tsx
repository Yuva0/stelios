import React, { useEffect } from "react";
import { NumberInputProps } from "./NumberInput.types";
import Text from "../Text/Text";
import colors from "../../tokens/colors.json";
import styled from "styled-components";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface NumberInputCalculateProps {
  position?: "left" | "right";
  size?: "small" | "medium" | "large";
}

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

const NumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 0.5rem;
`;

const NumberInputContent = styled.div<NumberInputCalculateProps>`
  display: flex;
  flex-direction: row;
  border: 1.5px solid ${colors.secondary["300"]};
  border-radius: 4px;
  height: ${(props) => getSize(props.size).size};
`;

const NumberInputCalculate = styled.button<NumberInputCalculateProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: NumberInputCalculateProps) => getSize(props.size).size};
  height: ${(props: NumberInputCalculateProps) => getSize(props.size).size};
  background-color: ${colors.secondary["100"]};
  color: ${colors.secondary["700"]};
  border: none;
  border-radius: ${(props) =>
    props.position === "left" ? "4px 0 0 4px" : "0 4px 4px 0"};
  cursor: pointer;
  svg {
    width: ${(props: NumberInputCalculateProps) =>
      getSize(props.size).iconSize};
    height: ${(props: NumberInputCalculateProps) =>
      getSize(props.size).iconSize};
  }
  &:hover {
    background-color: ${colors.secondary["200"]};
  }
`;

const NumberInputInput = styled.input<NumberInputCalculateProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Source Sans 3", sans-serif;
  font-size: ${(props) => getSize(props.size).fontSize};
  width: ${(props) => getSize(props.size).width};
  height: ${(props) => getSize(props.size).size};
  border: none;
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
`;

const NumberInput = ({
  id,
  placeholder,
  value,
  className,
  style,
  label,
  min,
  max,
  step,
  size,
  disabled,
  onChange,
  onIncrement,
  onDecrement,
}: NumberInputProps) => {
  const [numberInputLabel, setNumberInputLabel] =
    React.useState<React.ReactNode>(label);

  const [finalValue, setFinalValue] = React.useState<number | undefined>(
    value ?? 0
  );

  useEffect(() => {
    setNumberInputLabel(
      label ? (
        typeof label === "string" ? (
          <Text variant="paragraph">{label}</Text>
        ) : (
          label
        )
      ) : undefined
    );
  }, [label]);

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
      {numberInputLabel}
      <NumberInputContent size={size}>
        <NumberInputCalculate
          position="left"
          size={size}
          onClick={_onMinusClick}
        >
          <IconMinus />
        </NumberInputCalculate>

        <NumberInputInput
          placeholder={placeholder}
          type="number"
          size={size}
          max={max}
          min={min}
          value={finalValue}
          step={step}
          onChange={_onChange}
        />

        <NumberInputCalculate
          position="right"
          size={size}
          onClick={_onPlusClick}
        >
          <IconPlus />
        </NumberInputCalculate>
      </NumberInputContent>
    </NumberInputContainer>
  );
};

export default NumberInput;
