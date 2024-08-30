import * as React from "react";
import styled, { css } from "styled-components";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { useDebounce } from "../../helpers/CustomHooks";
import { NotificationDialogProps, NotificationDialogStyleProps } from "./NotificationDialog.types";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const NotificationDialog: React.FunctionComponent<NotificationDialogProps> = ({
  open = false,
  title,
  width = "auto",
  children,
  leadingIcon,
  trailingIcon,
  variant = "contained",
  color = colorTokens.default.primary.main,
  "data-testid": dataTestId,
  className,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(open);
  const debouncedOpen = useDebounce(open, 200);
  const [notifDialogRef, setNotifDialogRef] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  if(!open && !debouncedOpen) return null;

  const _title = title && typeof title === "string" ? (<Text disableColor variant="span">{title}</Text>) : title;
  const _children =
    typeof children === "string" ? (
      <Text disableColor variant="paragraph">{children}</Text>
    ) : (
      children
    );


  return (
    <StyledNotificationDialog
      ref={setNotifDialogRef}
      $open={isOpen}
      $variant={variant}
      $height={`${notifDialogRef?.offsetHeight}px`}
      $width={width}
      $colorPalette={colorPalette}
      $color={color}
      data-testid={dataTestId}
      className={className}
      style={style}
      {...props}
    >
      {leadingIcon && <StyledIcon>{leadingIcon}</StyledIcon>}
      <StyledNotificationContent>
        {_title}
        {_children}
      </StyledNotificationContent>

      {trailingIcon && <StyledIcon>{trailingIcon}</StyledIcon>}
    </StyledNotificationDialog>
  );
};
export default NotificationDialog;

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
  ${props => variantHandler(props.$variant, props.$colorPalette, props.$color)};

`;
const StyledNotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  flex: 1 0 auto;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const variantHandler = (variant: NotificationDialogProps["variant"], colorPalette: any, color: string) => {
  switch (variant) {
    case "contained":
      return css`
        background-color: ${colorPalette[color].accentScale[9]};
        border: 2px solid ${colorPalette[color].accentScale[9]};
        color: ${colorPalette[color].accentContrast};
      `;
    case "outlined":
      return css`
        background-color: transparent;
        border: 2px solid ${colorPalette[color].accentScale[9]};
        color: ${colorPalette[color].accentScale[10]};
      `;
    case "soft":
      return css`
        background-color: ${colorPalette[color].accentScale[1]};
        border: 2px solid ${colorPalette[color].accentScale[1]};
        color: ${colorPalette[color].accentScale[10]};
      `;
  }
}