import styled from "styled-components";

export const StyledButton = styled.button(({ theme }) => ({
  backgroundColor: theme.navBarBackground,
  color: theme.textColor,
  border: "none",
  borderRadius: theme.sizes.xs,
  padding: `${theme.sizes.xs} ${theme.sizes.s}`,
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: theme.tertiaryBackground,
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
}));
