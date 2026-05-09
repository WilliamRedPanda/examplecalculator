import styled from "styled-components";

export const StyledTypography = styled.div<{ $variant: string }>(
  ({ $variant }) => {
    switch ($variant) {
      case "H1":
        return {
          fontWeight: "bold",
          fontSize: "24px",
        };
      case "H2":
        return {
          fontSize: "16px",
        };
    }
  }
);
