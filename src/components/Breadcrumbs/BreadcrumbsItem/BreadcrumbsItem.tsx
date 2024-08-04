import * as React from "react";
import Link from "../../Link/Link";
import Text from "../../Text/Text";

interface BreadcrumbsItemProps {
  link?: string;
  title?: React.ReactNode;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
}

const BreadcrumbsItem: React.FunctionComponent<BreadcrumbsItemProps> = ({
  link,
  title,
  color = "info"
}: BreadcrumbsItemProps) => {
  return link ? (
    <Link color={color} variant="hover" href={link}>{title}</Link>
  ) : (
    <Text variant="span">{title}</Text>
  );
};

export default BreadcrumbsItem;
