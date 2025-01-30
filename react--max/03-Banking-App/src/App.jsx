import React from "react";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App() {
	const [initialInvestment, setInitialInvestment] = useState("");
	const [annualInvestment, setAnnualInvestment] = useState("");
	const [expectedReturn, setExpectedReturn] = useState("");
	const [duration, setDuration] = useState("");
	const [areFieldsFilled, setAreFieldsFilled] = useState(false);

	const [buttonClicked, setButtonClicked] = useState(false);
	const handleButtonClick = () => {
		setButtonClicked(true);
	};
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleButtonClick();
			console.log("you pressed enter");
		}
	};

	useEffect(() => {
		const isFilled =
			initialInvestment !== "" &&
			annualInvestment !== "" &&
			expectedReturn !== "" &&
			duration !== "";
		setAreFieldsFilled(isFilled);
	}, [initialInvestment, annualInvestment, expectedReturn, duration]);

	const handleFieldInput = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case "initialInvestment":
				setInitialInvestment(value);
				break;
			case "annualInvestment":
				setAnnualInvestment(value);
				break;
			case "expectedReturn":
				setExpectedReturn(value);
				break;
			case "duration":
				setDuration(value);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<Header />
			<main>
				<div>
					<UserInput
						handleFieldInput={handleFieldInput}
						areFieldsFilled={areFieldsFilled}
						handleButtonClick={handleButtonClick}
						handleKeyPress={handleKeyPress}
					/>
					<ResultsTable
						initialInvestment={initialInvestment}
						annualInvestment={annualInvestment}
						expectedReturn={expectedReturn}
						duration={duration}
						areFieldsFilled={areFieldsFilled}
						buttonClicked={buttonClicked}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
