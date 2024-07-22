import React from "react";
import {
  useTheme,
  useUpdateTheme,
} from "../../components/ThemeProvider/ThemeProvider";
import Button from "../../components/Button/Button";
import ToggleButtonGroup from "../../components/ToggleButton/ToggleButtonGroup/ToggleButtonGroup";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import { IconSun, IconMoon } from "@tabler/icons-react";
import Text from "../../components/Text/Text";

const TestDiv = ({ children }: any) => {
  const [appearance, setAppearance] = React.useState("light");
  const useUpdateTheme1 = useUpdateTheme();

  // const theme = useTheme().theme.colorPalette;

  const _handleAppearanceChange = (e, value) => {
    setAppearance(value);
    useUpdateTheme1({ appearance: value });
  };

  return (
    <div>
      {children}
      <ToggleButtonGroup
        value={appearance}
        style={{paddingTop:"8rem"}}
        onClick={_handleAppearanceChange}
      >
        <ToggleButton value="light">
          <IconSun />
          <Text noColor variant="span">
            Light
          </Text>
        </ToggleButton>
        <ToggleButton value="dark">
          <IconMoon />
          <Text noColor variant="span">
            Dark
          </Text>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default TestDiv;
