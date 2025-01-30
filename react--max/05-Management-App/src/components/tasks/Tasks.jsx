import NewTask from "./NewTask.jsx";
import "./tasks.css";
import "../window/Sidebar.css";

export default function Tasks({ tasks, onAdd, onDelete }) {
	return (
		<section className="tasks">
			<h2>Tasks</h2>
			<NewTask onAdd={onAdd} />
			{tasks.length === 0 && (
				<p className="task-content-p">
					This project does not have any tasks yet.
				</p>
			)}
			{tasks.length !== 0 && (
				<ul className="task-content-ul">
					{tasks.map((task) => (
						<li key={task.id} className="task-content">
							<button
								onClick={() => onDelete(task.id)}
								className="clr_button"
							>
								Clear
							</button>
							<span className="task-text">{task.text}</span>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
