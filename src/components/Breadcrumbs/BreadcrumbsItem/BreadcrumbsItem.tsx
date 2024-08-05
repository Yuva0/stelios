import * as React from "react";
import Link from "../../Link/Link";
import Text from "../../Text/Text";

interface BreadcrumbsItemProps {
  link?: string;
  title?: React.ReactNode;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
}

const BreadcrumbsItem: React.FunctionComponent<BreadcrumbsItemProps> = ({
  link,
  title,
  color = "info",
  size,
}: BreadcrumbsItemProps) => {
  return link ? (
    <Link size={size} color={color} variant="hover" href={link}>
      {title}
    </Link>
  ) : (
    <Text size={size} variant="span">
      {title}
    </Text>
  );
};

export default BreadcrumbsItem;
