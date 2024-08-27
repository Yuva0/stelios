import * as React from "react";
import {
  SliderLabelProps,
  SliderProps,
  SliderTrackStyleProps,
} from "./Slider.types";
import styled from "styled-components";
import Text from "../Text/Text";
import colorTokens from "../../tokens/colors.json";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";

const Slider: React.FunctionComponent<SliderProps> = ({
  value,
  defaultValue,
  min = 0,
  minDisplay = "0",
  max = 100,
  maxDisplay = "100",
  step = 1,
  width = "400px",
  color = colorTokens.default.primary.main,
  className,
  style,
  variant = "contained",
  size = "medium",
  disabled,
  disableLabels = false,
  // Events
  onChange,
}) => {
  const sliderRef = React.useRef<HTMLDivElement | null>(null);
  const [sliderValue, setSliderValue] = React.useState<number>(
    value ?? defaultValue ?? 0
  );
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  React.useEffect(() => {
    setSliderValue(value ?? defaultValue ?? 0);
  }, [value, defaultValue]);

  /* ------------------------------
    Calculate new value on MouseMove
  ------------------------------- */
  const calculateNewValue = (pageX: number) => {
    if (!sliderRef || !sliderRef.current) return;

    const containerX =
      sliderRef.current.getBoundingClientRect().x + window.scrollX;
    const containerWidth = sliderRef.current.offsetWidth;

    const offset = calculateHandleOffset(containerX, pageX, containerWidth);
    const scaleValue = getScaleValue(offset, min, max, 2);
    setSliderValue(scaleValue);
    onChange && onChange(scaleValue);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (disabled) return;
    calculateNewValue(e.pageX);

    const handleMouseMove = (e: MouseEvent) => {
      calculateNewValue(e.pageX);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div style={{ width: width }} aria-disabled={disabled}>
      <StyledSliderLabel $color={color} $colorPalette={colorPalette}>
        {!disableLabels && (
          <Text disableColor size={size}>
            {minDisplay}
          </Text>
        )}
        {!disableLabels && (
          <Text disableColor size={size}>
            {maxDisplay}
          </Text>
        )}
      </StyledSliderLabel>
      <StyledSliderTrack
        ref={sliderRef}
        className={className}
        style={style}
        $colorPalette={colorPalette}
        $color={color}
        $variant={variant}
        $size={size}
        $disabled={disabled}
        onMouseDown={handleMouseDown}
      >
        <StyledSliderTrackFinal
          style={{ width: `${sliderValue}%` }}
          $colorPalette={colorPalette}
          $color={color}
          $variant={variant}
          $size={size}
        >
          {!disabled && (
            <StyledSliderHandle
              $colorPalette={colorPalette}
              $color={color}
              $variant={variant}
              $size={size}
            />
          )}
        </StyledSliderTrackFinal>
        <StyledSliderInput
          type="slider"
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          readOnly
        />
      </StyledSliderTrack>
    </div>
  );
};
export default Slider;

const StyledSliderLabel = styled.div<SliderLabelProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  color: ${(props) => props.$colorPalette[props.$color].accentScale[10]};
`;
const StyledSliderTrack = styled.div<SliderTrackStyleProps>`
  position: relative;
  cursor: pointer;
  ${(props) => {
    const properties = styleHandler(
      props.$colorPalette,
      props.$color,
      props.$variant,
      props.$size
    );
    return `
      background-color: ${properties.track.backgroundColor.default};
      height: ${properties.track.height};
      border-radius: ${properties.track.borderRadius};
      outline: ${properties.track.outline.default};
      
      ${
        !props.$disabled
          ? `&:hover {
        background-color: ${properties.track.backgroundColor.hover};
        outline: ${properties.track.outline.hover};
      }
      &:active {
        background-color: ${properties.track.backgroundColor.active};
        outline: ${properties.track.outline.active};
      }`
          : ""
      }
    `;
  }}
`;
const StyledSliderTrackFinal = styled.div<SliderTrackStyleProps>`
  position: relative;
  z-index: 1;
  ${(props) => {
    const properties = styleHandler(
      props.$colorPalette,
      props.$color,
      props.$variant,
      props.$size
    );
    return `
      height: ${properties.trackFinal.height};
      border-radius: ${properties.trackFinal.borderRadius};
      background-color: ${properties.trackFinal.backgroundColor.default};
      ${
        !props.$disabled
          ? `&:hover {
        background-color: ${properties.trackFinal.backgroundColor.hover};
      }
      &:active {
        background-color: ${properties.trackFinal.backgroundColor.active};
      }`
          : ""
      }
    `;
  }}
`;
const StyledSliderHandle = styled.div<SliderTrackStyleProps>`
  position: absolute;
  border-radius: 50%;
  ${(props) => {
    const properties = styleHandler(
      props.$colorPalette,
      props.$color,
      props.$variant,
      props.$size
    );
    return `
      background-color: ${properties.trackFinal.backgroundColor.default};
      width: ${properties.handle.width};
      height: ${properties.handle.height};
      top: ${properties.handle.top};
      right: ${properties.handle.right};
      ${
        !props.$disabled
          ? `&:hover {
        background-color: ${properties.trackFinal.backgroundColor.hover};
      }
      &:active {
        background-color: ${properties.trackFinal.backgroundColor.active};
      }`
          : ""
      }
    `;
  }}
`;
const StyledSliderInput = styled.input`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  border: 0;
  padding: 0;
  margin: 0;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
`;
const styleHandler = (
  colorPalette: any,
  color: string,
  variant: SliderTrackStyleProps["$variant"],
  size: SliderTrackStyleProps["$size"]
) => {
  return {
    track: {
      ...getVariantStyles(colorPalette, color, variant).track,
      ...getSizeStyles(size).track,
    },
    trackFinal: {
      ...getVariantStyles(colorPalette, color, variant).trackFinal,
      ...getSizeStyles(size).trackFinal,
    },
    handle: {
      ...getSizeStyles(size).handle,
    },
  };
};
const getVariantStyles = (
  colorPalette: any,
  color: string,
  variant: SliderTrackStyleProps["$variant"]
) => {
  switch (variant) {
    case "contained":
      return {
        track: {
          backgroundColor: {
            default: colorPalette[color].accentScale[4],
            hover: colorPalette[color].accentScale[5],
            active: colorPalette[color].accentScale[5],
          },
          outline: {
            default: "none",
            hover: "none",
            active: "none",
          },
        },
        trackFinal: {
          backgroundColor: {
            default: colorPalette[color].accentScale[8],
            hover: colorPalette[color].accentScale[9],
            active: colorPalette[color].accentScale[9],
          },
        },
        handle: {},
      };
    case "outlined":
      return {
        track: {
          backgroundColor: {
            default: "transparent",
            hover: "transparent",
            active: "transparent",
          },
          outline: {
            default: `1px solid ${colorPalette[color].accentScale[8]}`,
            hover: `1px solid ${colorPalette[color].accentScale[9]}`,
            active: `1px solid ${colorPalette[color].accentScale[9]}`,
          },
        },
        trackFinal: {
          backgroundColor: {
            default: colorPalette[color].accentScale[8],
            hover: colorPalette[color].accentScale[9],
            active: colorPalette[color].accentScale[9],
          },
        },
      };
  }
};
const getSizeStyles = (size: SliderTrackStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return {
        track: {
          height: "6px",
          borderRadius: "5px",
        },
        trackFinal: {
          height: "100%",
          borderRadius: "3px",
        },
        handle: {
          width: "12px",
          height: "12px",
          right: "-6px",
          top: "-3px",
        },
      };
    case "medium":
      return {
        track: {
          height: "10px",
          borderRadius: "7px",
        },
        trackFinal: {
          height: "100%",
          borderRadius: "5px",
        },
        handle: {
          width: "20px",
          height: "20px",
          right: "-10px",
          top: "-5px",
          borderRadius: "50%",
        },
      };
    case "large":
      return {
        track: {
          height: "14px",
          borderRadius: "9px",
        },
        trackFinal: {
          height: "100%",
          borderRadius: "7px",
        },
        handle: {
          width: "24px",
          height: "24px",
          right: "-12px",
          top: "-6px",
          borderRadius: "50%",
        },
      };
  }
};

/* -------------------------------
  Calculate offset of the handle
------------------------------- */
const calculateHandleOffset = (
  containerStartingVal: number,
  mouseVal: number,
  containerLength: number
) => {
  const relativeVal = mouseVal - containerStartingVal;
  if (relativeVal < 0) {
    return 0;
  } else if (relativeVal > containerLength) {
    return 100;
  } else {
    return (relativeVal * 100) / containerLength;
  }
};
const getScaleValue = (
  value: number,
  min: number,
  max: number,
  rounded: number
) => {
  return +(min + (value / 100) * (max - min)).toFixed(rounded);
};
