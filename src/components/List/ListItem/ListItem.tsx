import React from "react";
import { ListItemProps } from "./ListItem.types";
// import styled from "styled-components";
import Text from "../../Text/Text";
// import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";
// import { useTheme } from "../../ThemeProvider/ThemeProvider";


const ListItem = ({ children, style, className }: ListItemProps) => {
  // const colorPalette = useTheme().theme.colorPalette;

  const ChildrenElement =
    typeof children === "string" ? (
      <Text variant="paragraph">{children}</Text>
    ) : (
      children
    );

  return (
    <li style={style} className={className}>
      {ChildrenElement}
    </li>
  );
};

export default ListItem;
