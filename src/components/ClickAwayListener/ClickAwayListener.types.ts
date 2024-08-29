export interface ClickAwayListenerProps {
  children: React.ReactNode;
  onClickAway: (event: MouseEvent) => void;
  "data-testid"?: string;
}
