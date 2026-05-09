import styled from "styled-components";

export const StyledTable = styled.table(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
  color: theme.textColor,
}));

export const TableHead = styled.thead(({ theme }) => ({
  backgroundColor: theme.secondaryBackground,
}));

export const TableRow = styled.tr(({ theme }) => ({
  "&:nth-child(even)": {
    backgroundColor: theme.secondaryBackground,
  },
  "&:hover": {
    backgroundColor: theme.tertiaryBackground,
  },
}));

export const TableHeader = styled.th(({ theme }) => ({
  padding: `${theme.sizes.xs} ${theme.sizes.s}`,
  textAlign: "left",
  fontWeight: "bold",
  borderBottom: `2px solid ${theme.tertiaryBackground}`,
}));

export const TableCell = styled.td(({ theme }) => ({
  padding: `${theme.sizes.xs} ${theme.sizes.s}`,
  borderBottom: `1px solid ${theme.tertiaryBackground}`,
}));

export const EmptyMessage = styled.p(({ theme }) => ({
  color: theme.textColor,
  opacity: 0.6,
  margin: 0,
}));
