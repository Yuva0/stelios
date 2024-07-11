import { createUseStyles } from "react-jss";
import { TextStyleProps } from "./Text.types";

export const useTextStyles = createUseStyles({
  "@global": {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap')",
  },
  "ste-typography": (props: TextStyleProps) => ({
    fontFamily: "'Source Sans 3', sans-serif",
    fontWeight: props.strong ? "bold" : "normal",
    textAlign: props.align,
    color: props.color,
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  "ste-typography-h1": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "2.5rem"
        : props.size === "medium"
          ? "2.25rem"
          : "2rem",
  }),
  "ste-typography-h2": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "2.25rem"
        : props.size === "medium"
          ? "2rem"
          : "1.75rem",
  }),
  "ste-typography-h3": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "2rem"
        : props.size === "medium"
          ? "1.75rem"
          : "1.5rem",
  }),
  "ste-typography-h4": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "1.75rem"
        : props.size === "medium"
          ? "1.5rem"
          : "1.25rem",
  }),
  "ste-typography-h5": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "1.5rem"
        : props.size === "medium"
          ? "1.25rem"
          : "1rem",
  }),
  "ste-typography-h6": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "1.25rem"
        : props.size === "medium"
          ? "1rem"
          : "0.875rem",
  }),
  "ste-typography-span": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "1.25rem"
        : props.size === "medium"
          ? "1rem"
          : "0.875rem",
  }),
  "ste-typography-label": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "1.25rem"
        : props.size === "medium"
          ? "1rem"
          : "0.75rem",
  }),
  "ste-typography-p": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "1.25rem"
        : props.size === "medium"
          ? "1rem"
          : "0.875rem",
  }),
  "ste-typography-div": (props: TextStyleProps) => ({
    fontSize:
      props.size === "large"
        ? "1.25rem"
        : props.size === "medium"
          ? "1rem"
          : "0.875rem",
  }),
});
