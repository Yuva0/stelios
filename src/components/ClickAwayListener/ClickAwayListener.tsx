import React, { useEffect, useRef } from "react";

import { ClickAwayListenerProps } from "./ClickAwayListener.types";

const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  children,
  onClickAway,
}) => {
  const clickAwayListenerRef = useRef<HTMLDivElement | null>(null);

  const handleClickAway = (e: MouseEvent) => {
    if (!children) return;

    if (
      clickAwayListenerRef.current &&
      !clickAwayListenerRef.current.contains(e.target as Node)
    ) {
      if (onClickAway) {
        onClickAway(e);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickAway, true);
  });

  return <div ref={clickAwayListenerRef}>{children}</div>;
};

export default ClickAwayListener;
