export interface ClickAwayListenerProps {
  /**
   * The wrapped element.
   */
  children: React.ReactNode;
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: (event: MouseEvent) => void;
}
