import { ChangeEvent } from "react";
import { AutocompleteInput } from "../../atoms/input";
import { Typography } from "../../atoms/typography";
import { GenericInput } from "../../atoms/genericInput";

export const CalculatorForm = () => {
    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
    <>
    <form onSubmit={onsubmit}>
      <Typography variant="h1">
        Calculator Form
      </Typography>
        <GenericInput label="Amount" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
        <GenericInput type="number" label="Installements" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
        <GenericInput label="Interest rate" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
        <GenericInput label="Duration" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
        <button type="submit">Submit</button>
    </form> 
    </>
  );
}