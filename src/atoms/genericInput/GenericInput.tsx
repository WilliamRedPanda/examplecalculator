import { FC } from "react";
import { GenericInputType } from "./types";
import { InputWrapper, StyledInput, StyledLabel } from "./styles";

export const GenericInput: FC<GenericInputType> = ({
  label,
  type = "text",
  onChange,
  placeholder
}) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput type={type} onChange={onChange} placeholder={placeholder} id={label} />
    </InputWrapper>
  );
};
