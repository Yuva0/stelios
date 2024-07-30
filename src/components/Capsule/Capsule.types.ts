export interface CapsuleProps {
  style?: React.CSSProperties;
  className?: string;
  width?: string;
  height?: string;
  image: string;
  imageProps?: {
    alt: string;
  };
  textProps?: {
    padding: string;
  }
  imagePosition?: "left" | "right";
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
