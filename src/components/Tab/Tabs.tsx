import * as React from "react";
import styled from "styled-components";
import { TabsProps } from "./Tabs.types";
import { TabProps } from "./Tab.types";
import colorTokens from "../../tokens/colors.json";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import { TabPanelProps } from "./TabPanel.types";

const Tabs: React.FC<TabsProps> = ({
  children,
  variant = "contained",
  color = colorTokens.default.primary.main,
  value = "",
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>(value);
  // const theme = useTheme().theme;
  // const colorPalette = getColorPalette(theme, color);

  const _pvtOnClickHandler = (value: string) => {
    setSelectedValue(value);
  };

  const _Children = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    if ((child.type as any).displayName === "TabList") {
      return React.cloneElement(child as any, {
        children: React.Children.map(child.props.children, (tab, index) => {
          if (tab.type.displayName === "Tab") {
            return React.cloneElement(tab, {
              selected: selectedValue
                ? tab.props.value === selectedValue
                : index === 0,
              pvtOnClick: _pvtOnClickHandler,
              ...(color && !tab.props.color && { color: color }),
              ...(variant && !tab.props.variant && { variant: variant }),
            });
          }
          return tab;
        }),
        ...(color && !child.props.color && { color: color }),
        ...(variant && !child.props.variant && { variant: variant }),
      });
    }

    if ((child.type as any).displayName === "TabPanels") {
      return React.cloneElement(child as any, {
        children: React.Children.map(
          child.props.children,
          (tabPanel, index) => {
            if (tabPanel.type.displayName === "TabPanel") {
              return React.cloneElement(tabPanel, {
                selected: selectedValue
                  ? tabPanel.props.value === selectedValue
                  : index === 0,
                ...(color && !tabPanel.props.color && { color: color }),
                ...(variant && !tabPanel.props.variant && { variant: variant }),
              });
            }
            return tabPanel;
          }
        ),
        ...(color && child.props.color && { color: color }),
        ...(variant && child.props.variant && { variant: variant }),
      });
    }
  });

  return <StyledTabs>{_Children}</StyledTabs>;
};
export default Tabs;
Tabs.displayName = "Tabs";

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
`;
