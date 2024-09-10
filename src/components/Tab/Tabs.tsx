import * as React from "react";
import styled from "styled-components";
import { TabsProps } from "./Tabs.types";
import { TabProps, TabPvtProps } from "./Tab.types";
import colorTokens from "../../tokens/colors.json";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import { TabPanelProps, TabPanelPvtProps } from "./TabPanel.types";

const Tabs: React.FC<TabsProps> = ({
  children,
  variant = "contained",
  color = colorTokens.default.primary.main,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  // const theme = useTheme().theme;
  // const colorPalette = getColorPalette(theme, color);

  const Children = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;

    if ((child.type as any).displayName === "TabList") {
      return React.Children.map(child, (tab, index) => {
        return React.cloneElement(tab, {
          pvtIndex: index,
          selected: index === selectedIndex,
          ...(color && !child.props.color && { color: color }),
        } as Partial<TabProps & TabPvtProps>);
      });
    }

    if((child.type as any).displayName === "TabPanels") {
      return React.Children.map(child, (tabPanel, index) => {
        return React.cloneElement(tabPanel, {
          selected: index === selectedIndex,
        } as Partial<TabPanelProps & TabPanelPvtProps>);

      });
    }

    return child;
  });

  return <StyledTabs>{Children}</StyledTabs>;
};
export default Tabs;
Tabs.displayName = "Tabs";

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
`;
