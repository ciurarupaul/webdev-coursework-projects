import { useState, useRef } from "react";

export default function Player() {
	const playerName = useRef();
	const [enteredPlayerName, setEnteredPlayerName] = useState(null);

	function handleClick() {
		setEnteredPlayerName(playerName.current.value);
		playerName.current.value = " ";
	}

	return (
		<section id="player">
			<h2>Welcome, {enteredPlayerName ?? "unknown entity"}!</h2>
			{/* ?? stands for: dipaly enteredPlayerName if truthy and unkentity if falsy */}
			<p>
				<input ref={playerName} type="text" />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}

// state causes the component to be RE executed, but a ref doesnt
// state - ui, ref - internal values
