import * as React from 'react';
import styled from 'styled-components';
import { TabPanelProps } from './TabPanel.types';

const TabPanel: React.FC<TabPanelProps> = ({children}) => {
  return (
    <StyledTabPanel>
      {children}
    </StyledTabPanel>
  )
};
export default TabPanel;

const StyledTabPanel = styled.div`
  display: flex;
  flex-direction: column;
`;