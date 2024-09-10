import * as React from 'react';
import styled from 'styled-components';

import { TabListProps } from './TabList.types';

const TabList: React.FC<TabListProps> = ({children, width = "400px"}) => {

  return (
    <StyledTabList style={{width: width}}>
      {children}
    </StyledTabList>
  )
};
export default TabList;
TabList.displayName = "TabList";

const StyledTabList = styled.div`
  display: flex;
  flex-direction: row;

  & > :first-child {
    border-radius: 8px 0 0 8px;
  }

  & > :last-child {
    border-radius: 0 8px 8px 0;
  }
`;