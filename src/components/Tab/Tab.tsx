import * as React from "react";
import styled from "styled-components";
import { TabProps } from "./Tab.types";
import Text from "../Text/Text";

const Tab: React.FC<TabProps> = ({ label }) => {
  const Label = (() => {
    if (!label) return null;
    return typeof label === "string" ? <Text>{label}</Text> : label;
  })();

  return (
    <StyledTab>
      {Label}
    </StyledTab>
  );
};
export default Tab;
Tab.displayName = "Tab";

const StyledTab = styled.span`
  display: flex;
  flex-direction: column;
`;
