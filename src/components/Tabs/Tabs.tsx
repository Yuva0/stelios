import * as React from "react";
import colorTokens from "../../tokens/colors.json";
import { TabsProps } from "./Tabs.types";
import { TabProps } from "@material-ui/core";

const Tabs = ({
  children,
  className,
  style,
  size = "medium",
  color = colorTokens.default.primary.main,
  variant = "contained",
  onClick,
  "data-testid": dataTestId,
  ...props
}: TabsProps) => {
  return (
    <div
      role="tablist"
      className={className}
      style={style}
      data-testid={dataTestId}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          key: index,
          size,
          color,
          variant,
          onClick,
        } as TabProps);
      })}
    </div>
  );
};

export default Tabs;
