import { FC } from "react";
import { StyledTypography } from "./styles";
import { TypographyType } from "./types";

export const Typography: FC<TypographyType> = ({
  variant = "H1",
  children,
}) => {
  return <StyledTypography $variant={variant}>{children}</StyledTypography>;
};
