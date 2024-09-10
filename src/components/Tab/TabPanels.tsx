import * as React from 'react';
import styled from 'styled-components';
import { TabPanelsProps } from './TabPanels.types';

const TabPanels: React.FC<TabPanelsProps> = ({children}) => {
  return (
    <StyledTabPanels>
      {children}
    </StyledTabPanels>
  )
}
export default TabPanels;
TabPanels.displayName = "TabPanels";

const StyledTabPanels = styled.div`
  display: flex;
  flex-direction: column;
`;