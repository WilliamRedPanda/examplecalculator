import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { CalculatorForm } from "../components/CalculatorForm";
import { lightTheme } from "../styles/style";
import { store } from "../store";

beforeEach(() => {
  localStorage.clear();
});

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </Provider>
  );

describe("CalculatorForm", () => {
  it("renders all form fields and the submit button", () => {
    renderWithProviders(<CalculatorForm />);
    expect(screen.getByLabelText("Amount")).toBeInTheDocument();
    expect(screen.getByLabelText("Interest rate")).toBeInTheDocument();
    expect(screen.getByLabelText("Duration")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("does not show monthly payment before submission", () => {
    renderWithProviders(<CalculatorForm />);
    expect(screen.queryByText(/estimated monthly payment/i)).not.toBeInTheDocument();
  });

  it("calculates and displays the monthly payment on submit", () => {
    renderWithProviders(<CalculatorForm />);

    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: "200000" } });
    fireEvent.change(screen.getByLabelText("Interest rate"), { target: { value: "5" } });
    fireEvent.change(screen.getByLabelText("Duration"), { target: { value: "30" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const result = screen.getByText(/estimated monthly payment/i);
    expect(result).toBeInTheDocument();
    expect(result.textContent).toMatch(/1073\./i);
  });

  it("saves the result to localStorage after submit", () => {
    renderWithProviders(<CalculatorForm />);

    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: "150000" } });
    fireEvent.change(screen.getByLabelText("Interest rate"), { target: { value: "4" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const history = JSON.parse(localStorage.getItem("mortgage_history") ?? "[]");
    expect(history).toHaveLength(1);
    expect(history[0].loanAmount).toBe(150000);
    expect(history[0].annualInterestRate).toBe(4);
    expect(history[0].rateType).toBe("variable");
  });

  it("accumulates multiple submissions in history", () => {
    renderWithProviders(<CalculatorForm />);

    const amountInput = screen.getByLabelText("Amount");
    const interestInput = screen.getByLabelText("Interest rate");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(amountInput, { target: { value: "100000" } });
    fireEvent.change(interestInput, { target: { value: "3" } });
    fireEvent.click(submitButton);

    fireEvent.change(amountInput, { target: { value: "200000" } });
    fireEvent.change(interestInput, { target: { value: "5" } });
    fireEvent.click(submitButton);

    const history = JSON.parse(localStorage.getItem("mortgage_history") ?? "[]");
    expect(history).toHaveLength(2);
  });
});
