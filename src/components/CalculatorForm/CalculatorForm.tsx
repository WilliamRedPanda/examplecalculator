import { ChangeEvent } from "react";
import { Typography } from "../../atoms/typography";
import { GenericInput } from "../../atoms/genericInput";
import { FormActions, FormGrid, StyledForm } from "./styles";
import { Button } from "../../atoms/button";

export const CalculatorForm = () => {
    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <StyledForm onSubmit={onsubmit}>
            <Typography variant="h1">
                Calculator Form
            </Typography>
            <FormGrid>
                <GenericInput label="Amount" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
                <GenericInput type="number" label="Installements" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
                <GenericInput label="Interest rate" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
                <GenericInput label="Duration" placeholder="Enter a value" onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} />
            </FormGrid>
            <FormActions>
                <Button type="submit">Submit</Button>
            </FormActions>
        </StyledForm>
    );
}