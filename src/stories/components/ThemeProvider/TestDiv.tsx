import React from "react";
import {
  useTheme,
  useUpdateTheme,
} from "../../../components/ThemeProvider/ThemeProvider";
import Button from "../../../components/Button/Button";
import ToggleButtonGroup from "../../../components/ToggleButton/ToggleButtonGroup/ToggleButtonGroup";
import ToggleButton from "../../../components/ToggleButton/ToggleButton";
import { IconSun, IconMoon } from "@tabler/icons-react";
import Text from "../../../components/Text/Text";

const TestDiv = ({ children }: any) => {
  const [appearance, setAppearance] = React.useState("light");
  const theme = useTheme().theme;
  const useUpdateTheme1 = useUpdateTheme();
  if(!theme) return null;
  const background = theme.colorPalette.primary.background;

  // const theme = useTheme().theme.colorPalette;

  const _handleAppearanceChange = (e, value) => {
    setAppearance(value);
    useUpdateTheme1({ appearance: value });
  };

  return (
    <div style={{ background: background, height: "100vh" }}>
      {children}
      <ToggleButtonGroup
        value={appearance}
        style={{ paddingTop: "8rem" }}
        onClick={_handleAppearanceChange}
      >
        <ToggleButton value="light">
          <IconSun />
          <Text disableColor variant="span">
            Light
          </Text>
        </ToggleButton>
        <ToggleButton value="dark">
          <IconMoon />
          <Text disableColor variant="span">
            Dark
          </Text>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default TestDiv;
