import { useState } from "react";
import AddNewColumnModal from "@components/core/Modals/AddNewColumnModal";
import styles from "./styles.module.scss";

const AddColumnButton = ({ board, filled = true, text }) => {
	const [addNewColumnModalOpen, setAddNewColumnModalOpen] = useState(false);

	const handleClick = () => {
		setAddNewColumnModalOpen(!addNewColumnModalOpen);
	};
	return (
		<>
			<button
				className={
					filled
						? styles.addNewColumnBtn
						: styles.addNewColumnBtnEmpty
				}
				type="button"
				onClick={handleClick}
			>
				{text}	
			</button>
			{addNewColumnModalOpen && (
				<AddNewColumnModal
					addNewColumnModalOpen={addNewColumnModalOpen}
					setAddNewColumnModalOpen={setAddNewColumnModalOpen}
					boardId={board.id}
				/>
			)}
		</>
	);
};

export default AddColumnButton;
