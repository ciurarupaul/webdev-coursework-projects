import "./project.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
	return (
		<p>
			<label className="editLabel">{label}</label>
			<input ref={ref} {...props} />
		</p>
	);
});

export default Input;
