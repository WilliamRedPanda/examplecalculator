import { ChangeEvent, useState } from "react";
import { Typography } from "../../atoms/typography";
import { GenericInput } from "../../atoms/genericInput";
import { FormActions, FormGrid, StyledForm } from "./styles";
import { Button } from "../../atoms/button";
import { Switch } from "../../atoms/switch";
import { Dropdown } from "../../atoms/dropdown";
import {
  calculateMonthlyPayment,
  getMortgageHistory,
  MortgageResult,
  saveMortgageResult,
} from "../../utils/mortgageCalculator";
import { FlexWrapper } from "../../styles/style";
import { MortgageHistory } from "../MortgageHistory";

const durationOptions = [
  { value: "10", label: "10 years" },
  { value: "20", label: "20 years" },
  { value: "30", label: "30 years" },
  { value: "40", label: "40 years" },
];

export const CalculatorForm = () => {
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState(durationOptions[0].value);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [isFixedRate, setIsFixedRate] = useState(false);
  const [history, setHistory] = useState<MortgageResult[]>(getMortgageHistory);

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      loanAmount: parseFloat(amount),
      annualInterestRate: parseFloat(interestRate),
      years: parseInt(years),
      rateType: isFixedRate ? "fixed" : "variable",
    } as const;
    const payment = calculateMonthlyPayment(params);
    setMonthlyPayment(payment);
    const result: MortgageResult = {
      ...params,
      monthlyPayment: parseFloat(payment.toFixed(2)),
      calculatedAt: new Date().toISOString(),
    };
    setHistory(saveMortgageResult(result));
  };

  return (
    <>
      <StyledForm onSubmit={onsubmit}>
        <Typography variant="h1">Calculator Form</Typography>
        <FormGrid>
          <GenericInput
            label="Amount"
            type="number"
            placeholder="Enter loan amount"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
          />
          <GenericInput
            label="Interest rate"
            type="number"
            placeholder="Enter annual rate (%)"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInterestRate(e.target.value)
            }
          />
          <Dropdown
            label="Duration"
            options={durationOptions}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setYears(e.target.value)
            }
          />
          <FlexWrapper
            flexWrap="wrap"
          >
            <Typography variant="h2"
            >Rate type</Typography>
            <Switch
              label={isFixedRate ? "Fixed" : "Variable"}
              onClick={() => {
                setIsFixedRate((prev) => !prev);
              }}
              initialState={isFixedRate}
              aria-checked={isFixedRate}
              labelPosition="left"
            />
          </FlexWrapper>
        </FormGrid>
        <FormActions>
          <Button type="submit">Submit</Button>
        </FormActions>
        {monthlyPayment !== null && (
          <Typography variant="h2">
            Estimated monthly payment: {monthlyPayment.toFixed(2)} €
          </Typography>
        )}
      </StyledForm>
      <MortgageHistory history={history} />
    </>
  );
};
