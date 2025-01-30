import "./Sidebar.css";
import Button from "../general/Button";

export default function Sidebar({
	onStartAddProject,
	projects,
	onSelectProject,
}) {
	return (
		<aside className="sidebar sidebar-header">
			<span>Your project</span>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<ul className="marg-top">
				{projects.map((projects) => {
					return (
						<li key={projects.id}>
							<button
								className="generic-btn list-btn"
								onClick={() => onSelectProject(projects.id)}
							>
								{projects.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
