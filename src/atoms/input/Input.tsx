import { FC } from "react";
import { StyledInput } from "./styles";
import { AutocompleteInputType } from "./types";

export const AutocompleteInput: FC<AutocompleteInputType> = ({ onChange }) => {
  return <StyledInput onChange={onChange} placeholder="Type to search" />;
};
