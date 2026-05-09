import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";

export const CardWrapper = styled.div<{ $hasAction: boolean }>(
  ({ theme, $hasAction }) => ({
    border: `4px solid ${theme.tertiaryBackground}`,
    borderRadius: theme.sizes.s,
    margin: theme.sizes.xs,
    padding: theme.sizes.m,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "start",
    [mediaQuery.mobile]: {
      border: "none",
    },
    "&:hover": {
      cursor: $hasAction ? "pointer" : "",
      backgroundColor: $hasAction ? theme.tertiaryBackground : "none",
    },
  })
);
