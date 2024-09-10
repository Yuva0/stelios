export interface TabPanelProps {
  children: React.ReactNode | React.ReactNode[];
  value: string;
};

export interface TabPanelPvtProps {
  selected?: boolean;
}