import "./project.css";
import Button from "../general/Button";

export default function NoProjectSelected({ onStartAddProject }) {
	return (
		<div className="container-pages container-landingPage">
			<img
				src="../src/assets/no-projects.png"
				alt="doodle of a clipboard"
			/>
			<p className="landingPage-title">No Project Selected</p>
			<p className="landingPage-description">
				Select a project or get started with a new one
			</p>
			<Button
				onClick={onStartAddProject}
				className="generic-btn createNew-btn"
			>
				Create new project
			</Button>
		</div>
	);
}
