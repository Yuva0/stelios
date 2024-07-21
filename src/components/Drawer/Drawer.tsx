import React from "react";
import styled from "styled-components";
import { DrawerProps, DrawerStyleProps } from "./Drawer.types";
import Text from "../Text/Text";
import IconButton from "../IconButton/IconButton";
import { IconX } from "@tabler/icons-react";
// import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";

type DrawerBackdropProps = {
  $backdropStrength: DrawerProps["backdropStrength"];
};

const getSize = (size: DrawerStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return 320;
    case "medium":
      return 480;
    case "large":
      return 640;
    default:
      return 480;
  }
};
const getBackdropStrength = (strength: DrawerProps["backdropStrength"]) => {
  switch (strength) {
    case "light":
      return "rgba(0, 0, 0, 0.1)";
    case "medium":
      return "rgba(0, 0, 0, 0.3)";
    case "strong":
      return "rgba(0, 0, 0, 0.5)";
    default:
      return "rgba(0, 0, 0, 0.3)";
  }
};

const StyledDrawer = styled.div<DrawerStyleProps>`
  width: ${(props) => `${getSize(props.$size)}px`};
  position: fixed;
  top: 0;
  ${(props) => props.$position}: ${(props) =>
    props.$open ? 0 : `${-1 * getSize(props.$size)}px`};
  height: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: ${(props) => `${props.$position} 0.3s ease-in-out;`}  
  z-index: ${(props) => props.$zIndex};
`;
const StyledBackdrop = styled.div<DrawerBackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: ${(props) => getBackdropStrength(props.$backdropStrength)};
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Drawer = ({
  children,
  open = false,
  position = "left",
  size = "medium",
  className,
  style,
  hideOnOutsideClick = true,
  zIndex = 1000,
  backdropStrength = "medium",
  title,
  hasCloseIcon = true,
  // Events
  onClose,
}: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const _onOutsideClick = (e: React.MouseEvent) => {
    if (hideOnOutsideClick) {
      setIsOpen(false);
      onClose && onClose(e);
    }
  };

  const Title =
    title && typeof title === "string" ? (
      <Text style={{ flexGrow: 1 }} variant="h5">
        {title}
      </Text>
    ) : (
      title
    );
  const CloseIcon = (
    <span style={{ float: "right" }}>
      <IconButton
        size="small"
        variant="outlined"
        icon={<IconX />}
        onClick={_onOutsideClick}
      />
    </span>
  );

  const headerDrawer = (title || hasCloseIcon) && (
    <StyledHeader>
      <div style={{ flexGrow: 1 }}>{Title}</div>
      {CloseIcon}
    </StyledHeader>
  );

  return (
    <>
      <StyledDrawer
        $open={isOpen}
        $position={position}
        $size={size}
        className={className}
        style={style}
        $zIndex={zIndex}
      >
        {headerDrawer}
        <div style={{ padding: "1rem" }}>{children}</div>
      </StyledDrawer>
      {isOpen && (
        <StyledBackdrop
          $backdropStrength={backdropStrength}
          onClick={_onOutsideClick}
        />
      )}
    </>
  );
};

export default Drawer;
