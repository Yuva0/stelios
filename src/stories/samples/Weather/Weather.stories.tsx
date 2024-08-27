import type { Meta } from "@storybook/react";
import * as React from "react";
import Card from "../../../components/Card/Card";
import {
  ThemeProvider,
  useTheme,
} from "../../../components/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Input from "../../../components/Input/Input";
import WeatherSVG from "../../../svg/weather.tsx";

interface WeatherProps {
  color?: string;
}

const WeatherMeta: Meta<typeof WeatherComp> = {
  title: "Samples/Weather",
  parameters: {
    layout: "centered",
  },
};
export default WeatherMeta;

const WeatherComp: React.FC<WeatherProps> = ({ color }) => {
  const theme = useTheme().theme;
  const colorPalette = theme?.colorPalette;
  return (
    <StyledContainerCard
      width="auto"
      color="primary"
      variant="outlined"
      style={{ backgroundColor: colorPalette?.primary.accentScale[0] || "" }}
      header={<WeatherHeader />}
    >test</StyledContainerCard>
  );
};

const WeatherHeader = () => {
  const theme = useTheme().theme;
  const colorPalette = theme?.colorPalette;
  return (
    <StyledHeaderContainer style={{backgroundColor: colorPalette?.primary.accentScale[2]}}>
      <StyledHeaderTop>
        <Text disableColor>Bangalore, India</Text>
        <Input
          size="small"
          variant="soft"
          width="150px"
          color="primary"
          placeholder="Search"
          inputStyle={{ backgroundColor: colorPalette?.primary.accentScale[4] }}
        />
      </StyledHeaderTop>
      <StyledHeaderMiddle>
        <div>
          <Text size="large" variant="paragraph" color="primary">
            23°C
          </Text>
          <Text variant="paragraph" color="primary">
            Partly Cloudy
          </Text>
        </div>
        <WeatherIcon>
          <WeatherSVG />
        </WeatherIcon>
      </StyledHeaderMiddle>
    </StyledHeaderContainer>
  );
};
const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  border-radius: 0.75rem 0.75rem 0 0;
  padding: 1rem;
  box-sizing: border-box;
  gap: 1rem;
`;
const StyledHeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeaderMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.5rem;
`;
const WeatherIcon = styled.div`
  width: 80px;
  height: 80px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const MobileUI = ({ children }) => {
  return (
    <div
      style={{
        border: "4px solid black",
        borderRadius: "0.75rem",
        height: "600px",
        width: "350px",
      }}
    >
      {children}
    </div>
  );
};

export const Weather: typeof WeatherMeta = {
  render: () => {
    return (
      <MobileUI>
        <ThemeProvider accents={{ primary: "purple" }}>
          <WeatherComp />
        </ThemeProvider>
      </MobileUI>
    );
  },
};

const StyledContainerCard = styled(Card)`
  width: auto;
  height: 100%;
  padding: 0;
  border: 0;
`;
