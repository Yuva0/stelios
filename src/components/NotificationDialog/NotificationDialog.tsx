import * as React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { useDebounce } from "../../helpers/CustomHooks";
interface NotificationDialogProps {
  open?: boolean;
  children?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  width?: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
}

interface NotificationDialogStyleProps {
  $open: boolean;
  $height?: string;
  $width: string;
  $colorPalette?: any;
  $color?: string;
}

const StyledNotificationDialog = styled.div<NotificationDialogStyleProps>`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  left: 2rem;
  border-radius: 0.5rem;
  padding: 1rem;
  width: ${(props) => props.$width};
  bottom: ${(props) => (props.$open ? "2rem" : `-${props.$height}`)};
  transition: bottom 0.2s ease-in-out;
  background: ${(props) => props.$colorPalette[props.$color ?? "primary"].accentScale[9]};
  color: ${(props) => props.$colorPalette[props.$color ?? "primary"].grayScale[0]};
`;

const StyledIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const NotificationDialog: React.FunctionComponent<NotificationDialogProps> = ({
  open = false,
  width = "auto",
  children,
  leadingIcon,
  trailingIcon,
  color = "primary",
}) => {
  const [isOpen, setIsOpen] = React.useState(open);
  const debouncedOpen = useDebounce(open, 200);
  const [notifDialogRef, setNotifDialogRef] = React.useState<HTMLDivElement | null>(null);

  const colorPalette = useTheme().theme.colorPalette;

  React.useEffect(() => {
    console.log(notifDialogRef);
  },[notifDialogRef]);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const ChildrenEle =
    typeof children === "string" ? (
      <Text noColor variant="paragraph">{children}</Text>
    ) : (
      children
    );

  if(!open && !debouncedOpen) return null;

  return (
    <StyledNotificationDialog
      ref={setNotifDialogRef}
      $open={isOpen}
      $height={`${notifDialogRef?.offsetHeight}px`}
      $width={width}
      $colorPalette={colorPalette}
      $color={color}
    >
      {leadingIcon && <StyledIcon>{leadingIcon}</StyledIcon>}
      {ChildrenEle}
      {trailingIcon && <StyledIcon>{trailingIcon}</StyledIcon>}
    </StyledNotificationDialog>
  );
};

export default NotificationDialog;
