import { useState } from "react";
import "./tasks.css";

export default function NewTask({ onAdd }) {
	const [enteredTask, setEnteredTask] = useState("");

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}

	function handleClick() {
		if (enteredTask.trim() === "") {
			return;
		}
		onAdd(enteredTask);
		setEnteredTask("");
	}

	return (
		<div className="list-header">
			<input type="text" onChange={handleChange} value={enteredTask} />
			<button onClick={handleClick}>Add task</button>
		</div>
	);
}
