export interface CodeEditorProps {
  text: string;
  code: React.ReactNode | [React.ReactNode];
  width?: string;
  color?: string;
}

export interface CodeEditorStyleProps {
  $colorPalette: any;
  $width?: string;
  $color: string;
}