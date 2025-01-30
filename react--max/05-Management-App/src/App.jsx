import React from "react";
import { useState } from "react";

import "./index.css";
import "./components/window/Sidebar.css";
import Sidebar from "./components/window/Sidebar.jsx";
import NoProjectSelected from "./components/project/NoProjectSelected.jsx";
import NewProject from "./components/project/NewProject.jsx";
import SelectedProject from "./components/project/SelectedProject.jsx";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	function handleAddTask(text) {
		setProjectsState((prevState) => {
			const taskId = Math.random();
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: taskId,
			};

			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	}

	function handleDeleteTask(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== id),
			};
		});
	}

	function handleSelectProject(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	}

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleCancelAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const projectId = Math.random();
			const newProject = {
				...projectData,
				id: projectId,
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handleDeleteProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			};
		});
	}

	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProjectId
	);

	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectsState.tasks}
		/>
	);

	if (projectsState.selectedProjectId === null) {
		content = (
			<NewProject
				onAdd={handleAddProject}
				onCancel={handleCancelAddProject}
			/>
		);
	} else if (projectsState.selectedProjectId === undefined) {
		content = (
			<NoProjectSelected onStartAddProject={handleStartAddProject} />
		);
	}

	return (
		<main className="container">
			<Sidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handleSelectProject}
				selectedProject={projectsState.selectedProjectId}
			/>
			{content}
		</main>
	);
}

export default App;
