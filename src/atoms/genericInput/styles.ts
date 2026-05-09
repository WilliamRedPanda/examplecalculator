import styled from "styled-components";

export const InputWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.sizes.xs,
}));

export const StyledLabel = styled.label(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
  color: theme.textColor,
}));

export const StyledInput = styled.input(({ theme }) => ({
  borderRadius: theme.sizes.xs,
  border: `2px solid ${theme.tertiaryBackground}`,
  backgroundColor: theme.secondaryBackground,
  color: theme.textColor,
  height: theme.sizes.m,
  padding: `0 ${theme.sizes.xs}`,
  outline: "none",
  "&:focus": {
    border: `2px solid ${theme.navBarBackground}`,
  },
}));
