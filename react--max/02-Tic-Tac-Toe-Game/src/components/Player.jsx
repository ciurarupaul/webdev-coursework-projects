import { useState } from "react";

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		setIsEditing((editing) => !editing);

		if (isEditing) onChangeName(symbol, playerName);
	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;

	if (isEditing) {
		editablePlayerName = (
			<input
				type="text"
				required
				value={playerName}
				onChange={handleChange}
			/>
		);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>
				{isEditing ? "Save" : "Edit"}
			</button>
		</li>
	);
}

/* 
import { useState } from "react";

export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);
	//initially, we are not editing / showing an input field

	function handleEditClick() {
		// setIsEditing(isEditing ? false : true); - not cool
		// setIsEditing(!isEditing); - not cool at all

		setIsEditing((editing) => !editing);
		// !!! When updating a state based on the previous value of that state, you should pass a function rather than the desired value
		// Better, pentru ca e handled (scheduled) de React
	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span class="player-name">{playerName}</span>;
	// you can store jsx code as a value in variables
	let btnCaption = "Edit";

	if (isEditing) {
		editablePlayerName = (
			<input
				type="text"
				required
				value={playerName}
				onChange={handleChange}
			/>
		);
		// desi avem 2 playeri, cand se face click pe edit, nu se schimba amandoi, deoarece React stie sa izoleze componentele in acest caz !!!
		btnCaption = "Save";
	}

	return (
		<li>
			<span class="player">
				{playerName}
				<span class="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
			
         // SAU {isEditing ? 'Save' : 'Edit'} 
			// nu handleEditClick(), pentru ca nu vrem sa pasam o functie, ci o valoare, pe care react sa o execute at some point
         </li>
         );
      }
      
*/
