export function calculateInvestmentResults({
	initialInvestment,
	annualInvestment,
	expectedReturn,
	duration,
}) {
	const annualData = [];

	initialInvestment = Number(initialInvestment);
	annualInvestment = Number(annualInvestment);
	expectedReturn = Number(expectedReturn);
	duration = Number(duration);

	let total_interest = 0;

	for (let i = 0; i < duration; i++) {
		const invested_capital = initialInvestment + (i + 1) * annualInvestment;
		const interest_year = (expectedReturn / 100) * invested_capital;
		const investment_value = invested_capital + interest_year;
		total_interest += interest_year;

		annualData.push({
			year: i + 1,
			investment_value: investment_value,
			interest_year: interest_year,
			total_interest: total_interest,
			invested_capital: invested_capital,
			initial_investment: initialInvestment,
		});
	}
	return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "eur",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});
