import { FC } from "react";
import { ButtonType } from "./types";
import { StyledButton } from "./styles";

export const Button: FC<ButtonType> = ({
  children,
  type = "button",
  onClick,
  disabled,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
