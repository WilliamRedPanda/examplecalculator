import { FC } from "react";
import { CollapsibleSection } from "../../atoms/collapsibleSection";
import { MortgageResult } from "../../utils/mortgageCalculator";
import {
  EmptyMessage,
  StyledTable,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./styles";

type MortgageHistoryProps = {
  history: MortgageResult[];
};

export const MortgageHistory: FC<MortgageHistoryProps> = ({ history }) => {
  return (
    <CollapsibleSection title="Calculation history" defaultOpen>
      {history.length === 0 ? (
        <EmptyMessage>No calculations yet.</EmptyMessage>
      ) : (
        <StyledTable>
          <TableHead>
            <tr>
              <TableHeader>Date</TableHeader>
              <TableHeader>Loan amount</TableHeader>
              <TableHeader>Rate (%)</TableHeader>
              <TableHeader>Rate type</TableHeader>
              <TableHeader>Years</TableHeader>
              <TableHeader>Monthly payment</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            {history.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{new Date(entry.calculatedAt).toLocaleString()}</TableCell>
                <TableCell>{entry.loanAmount.toLocaleString()} €</TableCell>
                <TableCell>{entry.annualInterestRate}%</TableCell>
                <TableCell>{entry.rateType}</TableCell>
                <TableCell>{entry.years}</TableCell>
                <TableCell>{entry.monthlyPayment.toFixed(2)} €</TableCell>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      )}
    </CollapsibleSection>
  );
};
