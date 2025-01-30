import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog className="modal-content" ref={dialog}>
			{children}
			<form method="dialog">
				<button className="modal-btn">{buttonCaption}</button>
			</form>
		</dialog>,
		document.getElementById("modal-root")
	);
});

export default Modal;
