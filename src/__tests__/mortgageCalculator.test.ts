import {
  calculateMonthlyPayment,
  getMortgageHistory,
  MortgageResult,
  saveMortgageResult,
} from "../utils/mortgageCalculator";

beforeEach(() => {
  localStorage.clear();
});

describe("calculateMonthlyPayment", () => {
  it("calculates the correct monthly payment using the PMT formula", () => {
    
    const result = calculateMonthlyPayment({
      loanAmount: 200000,
      annualInterestRate: 5,
      years: 30,
      rateType: "fixed",
      installmentsPerYear: 12,
    });
    expect(result).toBeCloseTo(1073.64, 0);
  });

  it("divides evenly when interest rate is 0%", () => {
    const result = calculateMonthlyPayment({
      loanAmount: 120000,
      annualInterestRate: 0,
      years: 10,
      rateType: "variable",
      installmentsPerYear: 12,
    });
    expect(result).toBeCloseTo(1000, 5);
  });

  it("calculates correct quarterly payment", () => {
    
    const result = calculateMonthlyPayment({
      loanAmount: 120000,
      annualInterestRate: 0,
      years: 10,
      rateType: "fixed",
      installmentsPerYear: 4,
    });
    expect(result).toBeCloseTo(3000, 5);
  });

  it("returns a higher payment for fewer instalments per year", () => {
    const params = { loanAmount: 150000, annualInterestRate: 4, years: 20, rateType: "fixed" as const };
    const quarterly = calculateMonthlyPayment({ ...params, installmentsPerYear: 4 });
    const monthly = calculateMonthlyPayment({ ...params, installmentsPerYear: 12 });
    expect(quarterly).toBeGreaterThan(monthly);
  });

  it("returns a higher payment for shorter loan durations", () => {
    const params = { loanAmount: 150000, annualInterestRate: 4, rateType: "fixed" as const, installmentsPerYear: 12 };
    const short = calculateMonthlyPayment({ ...params, years: 10 });
    const long = calculateMonthlyPayment({ ...params, years: 30 });
    expect(short).toBeGreaterThan(long);
  });

  it("returns a higher payment for higher interest rates", () => {
    const params = { loanAmount: 150000, years: 20, rateType: "fixed" as const, installmentsPerYear: 12 };
    const high = calculateMonthlyPayment({ ...params, annualInterestRate: 8 });
    const low = calculateMonthlyPayment({ ...params, annualInterestRate: 2 });
    expect(high).toBeGreaterThan(low);
  });
});

describe("getMortgageHistory", () => {
  it("returns an empty array when localStorage is empty", () => {
    expect(getMortgageHistory()).toEqual([]);
  });

  it("returns parsed history from localStorage", () => {
    const entry: MortgageResult = {
      loanAmount: 100000,
      annualInterestRate: 3.5,
      years: 20,
      rateType: "fixed",
      installmentsPerYear: 12,
      paymentAmount: 579.96,
      calculatedAt: "2026-01-01T00:00:00.000Z",
    };
    localStorage.setItem("mortgage_history", JSON.stringify([entry]));
    expect(getMortgageHistory()).toEqual([entry]);
  });

  it("returns an empty array when localStorage contains invalid JSON", () => {
    localStorage.setItem("mortgage_history", "not-json");
    expect(getMortgageHistory()).toEqual([]);
  });
});

describe("saveMortgageResult", () => {
  it("saves the first entry and returns it in an array", () => {
    const entry: MortgageResult = {
      loanAmount: 200000,
      annualInterestRate: 5,
      years: 30,
      rateType: "variable",
      installmentsPerYear: 12,
      paymentAmount: 1073.64,
      calculatedAt: "2026-05-01T10:00:00.000Z",
    };
    const result = saveMortgageResult(entry);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(entry);
  });

  it("appends to existing history", () => {
    const first: MortgageResult = {
      loanAmount: 100000,
      annualInterestRate: 3,
      years: 15,
      rateType: "fixed",
      installmentsPerYear: 4,
      paymentAmount: 691.0,
      calculatedAt: "2026-04-01T10:00:00.000Z",
    };
    const second: MortgageResult = {
      loanAmount: 200000,
      annualInterestRate: 5,
      years: 30,
      rateType: "variable",
      installmentsPerYear: 12,
      paymentAmount: 1073.64,
      calculatedAt: "2026-05-01T10:00:00.000Z",
    };
    saveMortgageResult(first);
    const result = saveMortgageResult(second);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(first);
    expect(result[1]).toEqual(second);
  });

  it("persists history so getMortgageHistory returns it", () => {
    const entry: MortgageResult = {
      loanAmount: 150000,
      annualInterestRate: 4,
      years: 20,
      rateType: "fixed",
      installmentsPerYear: 12,
      paymentAmount: 909.66,
      calculatedAt: "2026-05-09T12:00:00.000Z",
    };
    saveMortgageResult(entry);
    expect(getMortgageHistory()).toEqual([entry]);
  });
});
