import React from "react";
import { useTextStyles } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text = ({
  variant,
  strong,
  children,
  align,
  color,
  wrap,
  size = "medium",
  style,
  ...rest
}: TextProps) => {
  const classNames = useTextStyles({
    variant,
    strong,
    align,
    color,
    wrap,
    size,
  });

  switch (variant) {
    case "h1":
      return (
        <h1
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-h1"]}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-h2"]}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-h3"]}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-h4"]}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-h5"]}`}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-h6"]}`}
        >
          {children}
        </h6>
      );
    case "div":
      return (
        <div
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-div"]}`}
        >
          {children}
        </div>
      );
    case "paragraph":
      return (
        <p
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-p"]}`}
        >
          {children}
        </p>
      );
    case "label":
      return (
        <label
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-label"]}`}
        >
          {children}
        </label>
      );
    case "span":
      return (
        <span
          style={style}
          className={`${classNames["ste-typography"]} ${classNames["ste-typography-span"]}`}
        >
          {children}
        </span>
      );
    default:
      return (
        <div style={style} className={`${classNames["ste-typography"]}`}>
          {children}
        </div>
      );
  }
};

// const Text = React.forwardRef<HTMLHeadingElement, TextProps>((props, ref) => (
//   <TextInternal ref={ref} {...props} />
// ));

export default Text;
