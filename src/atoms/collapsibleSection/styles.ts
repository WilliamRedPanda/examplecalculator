import styled from "styled-components";

export const SectionWrapper = styled.div(({ theme }) => ({
  border: `2px solid ${theme.tertiaryBackground}`,
  borderRadius: theme.sizes.xs,
  overflow: "hidden",
}));

export const SectionHeader = styled.button(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${theme.sizes.xs} ${theme.sizes.s}`,
  backgroundColor: theme.secondaryBackground,
  color: theme.textColor,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: theme.tertiaryBackground,
  },
}));

export const SectionBody = styled.div(({ theme }) => ({
  padding: theme.sizes.s,
}));
