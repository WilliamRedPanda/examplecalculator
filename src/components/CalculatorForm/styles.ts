import styled from "styled-components";

export const StyledForm = styled.form(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.sizes.m,
  padding: theme.sizes.l,
  margin: "0 auto",
}));

export const FormGrid = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.sizes.s,
  "& > *": {
    flex: "1 1 calc(50% - 8px)",
    minWidth: "200px",
  },
}));

export const FormActions = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
