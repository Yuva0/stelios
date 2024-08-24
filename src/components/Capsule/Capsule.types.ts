export interface CapsuleProps {
  variant?: "contained" | "outlined" | "soft";
  style?: React.CSSProperties;
  color?: string;
  className?: string;
  width?: string;
  height?: string;
  image: string;
  imageAlt: string;
  textProps?: {
    padding?: string;
  };
  imagePosition?: "left" | "right";
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface CapsuleStyleProps {
  $variant: NonNullable<CapsuleProps["variant"]>;
  $color: NonNullable<CapsuleProps["color"]>;
  $imagePosition: NonNullable<CapsuleProps["imagePosition"]>;
  $width: NonNullable<CapsuleProps["width"]>;
  $height: NonNullable<CapsuleProps["height"]>;
  $colorPalette: any; // Adjust this to match your theme's color palette type
}
