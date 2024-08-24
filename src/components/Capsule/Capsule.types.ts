export interface CapsuleProps {
  variant?: "contained" | "outlined" | "soft";
  style?: React.CSSProperties;
  color?: string;
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

export interface CapsuleContainerStyleProps {
  $width: string;
  $height: string;
}
export interface CapsuleStyleProps {
  $imagePosition: CapsuleProps["imagePosition"];
  $variant: "contained" | "outlined" | "soft";
}