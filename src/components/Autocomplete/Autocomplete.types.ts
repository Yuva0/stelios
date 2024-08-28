import { MenuItemProps } from "../MenuItem/MenuItem.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

export interface AutocompleteProps {
  id?: string;
  placeholder?: string;
  value?: string | string[];
  width?: string;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  label?: React.ReactNode;
  open?: boolean;
  options?: MenuItemProps[];
  multiSelect?: boolean;
  color?: string;
  variant?: "contained" | "outlined" | "soft";
  
  // Events
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => void;
  onInputChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent,
    value?: string
  ) => void;
  onClick?: (e: React.MouseEvent, { title, value }: MenuItemKeyProps) => void;

  // Test Props
  "data-testid"?: string;
  "data-testid-input"?: string;
  "data-testid-menu"?: string;
}
