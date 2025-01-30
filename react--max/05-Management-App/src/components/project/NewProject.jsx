import { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "../general/Modal.jsx";
import "./project.css";

export default function NewProject({ onAdd, onCancel }) {
	const modal = useRef();

	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSave() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if (
			enteredTitle.trim() === "" ||
			enteredDescription.trim() === "" ||
			enteredDueDate.trim() === ""
		) {
			modal.current.open();
			return;
		}

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<>
			<Modal ref={modal} buttonCaption="Okay">
				<h2>Invalid Input</h2>
				<p>Oops... looks like you forgot to enter a value</p>
				<p>
					Please make sure to provide a valid input for every input
					field.
				</p>
			</Modal>
			<div className="container-pages">
				<menu>
					<button className="cancel menu-btns" onClick={onCancel}>
						Cancel
					</button>
					<button onClick={handleSave} className="save menu-btns">
						Save
					</button>
				</menu>
				<div className="input-container">
					<Input
						ref={title}
						label="Title"
						className="project-title project-input"
						type="text"
					/>
					<Input
						ref={description}
						label="Description"
						className="project-description project-input"
					/>
					<Input
						ref={dueDate}
						label="Due Date"
						className="project-dueDate project-input"
						type="date"
					/>
				</div>
			</div>
		</>
	);
}
