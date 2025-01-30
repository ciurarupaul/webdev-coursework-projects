import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import styled, { css } from "styled-components";

// export default function AddCabin() {
// 	const [isOpenModal, setIsOpenModal] = useState();

// 	return (
// 		<>
// 			<Button onClick={() => setIsOpenModal((show) => !show)}>
// 				Add new cabin
// 			</Button>

// 			{isOpenModal && (
// 				<Modal onClose={() => setIsOpenModal(false)}>
// 					<CreateCabinForm
// 						onCloseModal={() => setIsOpenModal(false)}
// 					/>
// 				</Modal>
// 			)}
// 		</>
// 	);
// }

const StyledDiv = styled.div`
	display: flex;
	justify-content: flex-end;
`;

function AddCabin() {
	return (
		<div>
			<Modal>
				<StyledDiv>
					<Modal.Open opens="cabin-form">
						<Button>Add new cabin</Button>
					</Modal.Open>
				</StyledDiv>

				<Modal.Window name="cabin-form">
					<CreateCabinForm />
				</Modal.Window>
			</Modal>
		</div>
	);
}

export default AddCabin;
