export interface CapsuleProps {
  variant?: "contained" | "outlined" | "soft" | "outlined-soft" | "neumorph";
  color?: string;
  width?: string;
  height?: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  title?: React.ReactNode;
  description?: React.ReactNode;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  className?: string;
  textClassName?: string;
  imageClassName?: string;


  // Test Props
  "data-testid"?: string;
}

export interface CapsuleStyleProps {
  $variant: NonNullable<CapsuleProps["variant"]>;
  $color: NonNullable<CapsuleProps["color"]>;
  $imagePosition: NonNullable<CapsuleProps["imagePosition"]>;
  $width: NonNullable<CapsuleProps["width"]>;
  $height: NonNullable<CapsuleProps["height"]>;
  $clickable: NonNullable<CapsuleProps["clickable"]>;
  $colorPalette: any; // Adjust this to match your theme's color palette type
}
