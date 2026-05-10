export type RateType = "fixed" | "variable";

export type MortgageParams = {
  loanAmount: number;
  annualInterestRate: number;
  years: number;
  rateType: RateType;
  installmentsPerYear: number;
};

export type MortgageResult = MortgageParams & {
  paymentAmount: number;
  calculatedAt: string;
};

export const calculateMonthlyPayment = ({
  loanAmount,
  annualInterestRate,
  years,
  installmentsPerYear,
}: MortgageParams): number => {
  const n = years * installmentsPerYear;
  if (annualInterestRate === 0) return loanAmount / n;
  const r = annualInterestRate / 100 / installmentsPerYear;
  return (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
};

const STORAGE_KEY = "mortgage_history";

export const getMortgageHistory = (): MortgageResult[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
};

export const saveMortgageResult = (result: MortgageResult): MortgageResult[] => {
  const history = getMortgageHistory();
  const updated = [...history, result];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
