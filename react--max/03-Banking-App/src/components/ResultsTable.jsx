import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ({
	initialInvestment,
	annualInvestment,
	expectedReturn,
	duration,
	areFieldsFilled,
	buttonClicked,
}) {
	const investmentResults = calculateInvestmentResults({
		initialInvestment,
		annualInvestment,
		expectedReturn,
		duration,
	});

	function format(value) {
		return formatter.format(value);
	}

	return (
		<div>
			{areFieldsFilled && buttonClicked && (
				<table id="result">
					<thead>
						<tr>
							<th>Year</th>
							<th>Investment Value</th>
							<th>Interest (Year)</th>
							<th>Total Interest</th>
							<th>Invested Capital</th>
						</tr>
					</thead>
					<tbody>
						{investmentResults.map((result) => (
							<tr key={result.year}>
								<td>{result.year}</td>
								<td>{format(result.investment_value)}</td>
								<td>{format(result.interest_year)}</td>
								<td>{format(result.total_interest)}</td>
								<td>{format(result.invested_capital)}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}
