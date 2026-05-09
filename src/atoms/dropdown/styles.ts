import styled from "styled-components";

export const DropdownWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.sizes.xs,
}));

export const StyledLabel = styled.label(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
  color: theme.textColor,
}));

export const StyledSelect = styled.select(({ theme }) => ({
  borderRadius: theme.sizes.xs,
  border: `2px solid ${theme.tertiaryBackground}`,
  backgroundColor: theme.secondaryBackground,
  color: theme.textColor,
  height: theme.sizes.m,
  padding: `0 ${theme.sizes.xs}`,
  outline: "none",
  cursor: "pointer",
  "&:focus": {
    border: `2px solid ${theme.navBarBackground}`,
  },
}));
