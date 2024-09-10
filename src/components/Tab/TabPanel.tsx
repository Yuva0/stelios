import * as React from "react";
import styled from "styled-components";
import { TabPanelProps } from "./TabPanel.types";

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  selected = false,
}: TabPanelProps) => {
  if(!selected) return null;
  return <StyledTabPanel>{children}</StyledTabPanel>;
};
export default TabPanel;
TabPanel.displayName = "TabPanel";

const StyledTabPanel = styled.div`
  display: flex;
  flex-direction: column;
`;
