import "../window/Sidebar.css";
import Tasks from "../tasks/Tasks";

export default function SelectedProject({
	project,
	onDelete,
	onAddTask,
	onDeleteTask,
	tasks,
}) {
	const formattedDate = new Date(project.dueDate).toLocaleDateString(
		"en-US",
		{ year: "numeric", month: "short", day: "numeric" }
	);
	return (
		<div className="listContent-container">
			<header className="margin-btm">
				<div className="listContent-header">
					<h1 className="listContent-title">{project.title}</h1>
					<button className="listContent-btn" onClick={onDelete}>
						Delete
					</button>
				</div>
				<p className="listContent-date">{formattedDate}</p>
				<p className="listContent-description">{project.description}</p>
			</header>
			<Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
		</div>
	);
}
