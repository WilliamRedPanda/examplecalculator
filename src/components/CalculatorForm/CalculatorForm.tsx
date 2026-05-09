import { ChangeEvent } from "react";
import { Typography } from "../../atoms/typography";
import { GenericInput } from "../../atoms/genericInput";
import { FormActions, FormGrid, StyledForm } from "./styles";
import { Button } from "../../atoms/button";
import { Switch } from "../../atoms/switch";
import { Dropdown } from "../../atoms/dropdown";

export const CalculatorForm = () => {
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const durationOption
    = [
        { value: "10", label: "10 years" },
        { value: "20", label: "20 years" },
        { value: "30", label: "30 years" },
        { value: "40", label: "40 years" },
      ]
  ;

  return (
    <StyledForm onSubmit={onsubmit}>
      <Typography variant="h1">Calculator Form</Typography>
      <FormGrid>
        <GenericInput
          label="Amount"
          placeholder="Enter a value"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
        />
        {/* <GenericInput
          type="number"
          label="Installements"
          placeholder="Enter a value"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
        /> */}
        <GenericInput
          label="Interest rate"
          placeholder="Enter a value"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
        />
        <Dropdown
          label="Duration"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            console.log(e.target.value)
          }
          options={durationOption}
        />
      </FormGrid>
      <Switch
        label="Rate type"
        onClick={() => console.log("checked")}
        initialState={false}
      />
      <FormActions>
        <Button type="submit">Submit</Button>
      </FormActions>
    </StyledForm>
  );
};
