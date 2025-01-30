export default function Button({ children, ...props }) {
	return (
		<button className="addProject" {...props}>
			{children}
		</button>
	);
}
