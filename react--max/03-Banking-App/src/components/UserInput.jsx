import { useState } from "react";

export default function ({
	handleFieldInput,
	areFieldsFilled,
	handleButtonClick,
	handleKeyPress,
}) {
	return (
		<div id="user-input" className="input-container">
			<div className="input-grid">
				<div className="input-component">
					<label htmlFor="initialInvestment">
						initial investment
					</label>
					<input
						id="initialInvestment"
						name="initialInvestment"
						type="number"
						step="500"
						min="0"
						onChange={handleFieldInput}
						required
					></input>
				</div>
				<div className="input-component">
					<label htmlFor="annualInvestment">anual investment</label>
					<input
						id="annualInvestment"
						name="annualInvestment"
						type="number"
						step="100"
						min="0"
						onChange={handleFieldInput}
						required
					></input>
				</div>
				<div className="input-component">
					<label htmlFor="expectedReturn">expected return</label>
					<input
						id="expectedReturn"
						name="expectedReturn"
						type="number"
						step="0.5"
						min="0"
						onChange={handleFieldInput}
						required
					></input>
				</div>
				<div className="input-component">
					<label htmlFor="duration">duration</label>
					<input
						id="duration"
						name="duration"
						type="number"
						min="0"
						onChange={handleFieldInput}
						required
					></input>
				</div>
			</div>

			<button
				id="calcBtn"
				onClick={handleButtonClick}
				disabled={!areFieldsFilled}
				onKeyDown={handleKeyPress}
			>
				Calculate
			</button>
		</div>
	);
}
