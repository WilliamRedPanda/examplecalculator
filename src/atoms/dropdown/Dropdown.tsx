import { FC } from "react";
import { DropdownType } from "./types";
import { DropdownWrapper, StyledLabel, StyledSelect } from "./styles";

export const Dropdown: FC<DropdownType> = ({ label, options, onChange, value }) => {
  return (
    <DropdownWrapper>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledSelect id={label} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </DropdownWrapper>
  );
};
