import styled from "styled-components";

export const StyledInput = styled.input(({ theme }) => ({
  borderRadius: theme.sizes.s,
  border: "none",
  height: theme.sizes.m,
  padding: theme.sizes.xs,
  outline: "none",
}));
