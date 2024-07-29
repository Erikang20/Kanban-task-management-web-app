// This is with reactstrap and bootstrap
import { Modal, ModalBody, FormGroup, Label, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Modals.module.css";
import { Button } from "../Button";
import { useState } from "react";
import Cross from "@assets/icon-cross.svg";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, GET_BOARDS } from "../../../lib/graphql/queries";

const AddNewBoardModal = ({
	addNewBoardModalOpen,
	setAddNewBoardModalOpen,
}) => {
	const [inputValue, setInputValue] = useState("");
	const [boardName, setBoardName] = useState("");
	const [boardColumns, setBoardColumns] = useState(["Todo", "Doing"]);
	const [newBoard, setNewBoard] = useState({
		boardName: boardName,
		boardColumns: boardColumns,
	});
	const [createBoard] = useMutation(CREATE_BOARD, {
		refetchQueries: [{ query: GET_BOARDS }],
	});
	const [errors, setErrors] = useState({
		boardName: "",
	});

	const handleBoardNameChange = (e) => {
		setInputValue(e.target.value);
		const newBoardName = e.target.value;
		setBoardName(newBoardName);
	};

	const handleBoardColumnChange = (e) => {
		setInputValue(e.target.value);
		boardColumns[e.target.id] = e.target.value;
		setBoardColumns(boardColumns);
	};

	const handleAddNewColumnBtnClick = () => {
		setBoardColumns([...boardColumns, ""]);
	};

	const handleXBtnClick = (e) => {
		const newBoardColumns = [...boardColumns];
		newBoardColumns.splice(e.target.id, 1);
		setBoardColumns(newBoardColumns);
	};

	const handleCreateNewBoardSubmit = async (e) => {
		// e.preventDefault();
		if (boardName) {
			setErrors({ boardName: "" });
			await createBoard({ variables: { name: boardName } });
			setAddNewBoardModalOpen(false);
		} else {
			setErrors({ boardName: "Board name is required" });
		}
	};

	return (
		<>
			<Modal className={styles.modalDiv} isOpen={addNewBoardModalOpen}>
				<ModalBody>
					<h5 className={styles.modalHeader}>Add New Board</h5>
					<Form onSubmit={() => setAddNewBoardModalOpen(false)}>
						<FormGroup>
							<Label
								className={styles.modalLabel}
								htmlFor="boardName"
							>
								Board Name
							</Label>
							<Input
								name="boardName"
								placeholder="e.g. Web Design"
								className={styles.modalInput}
								onChange={handleBoardNameChange}
							/>
							{errors.boardName && (
								<span className={styles.error}>
									{errors.boardName}
								</span>
							)}
						</FormGroup>

						<FormGroup>
							<Label
								className={styles.modalLabel}
								htmlFor="boardColumns"
							>
								Board Columns
							</Label>
							<div>
								{boardColumns.map((item, index) => {
									return (
										<div
											className={
												styles.boardColumnItemContainer
											}
										>
											<Input
												id={index}
												name="boardColumns"
												className={styles.modalInput}
												value={item}
												onChange={
													handleBoardColumnChange
												}
											/>
											<button
												id={index}
												type="button"
												className={styles.xBtn}
												onClick={handleXBtnClick}
											>
												<Cross
													id={index}
													className={styles.cross}
													alt="X"
												/>
											</button>
										</div>
									);
								})}
							</div>

							<Button
								className={styles.modalBtnNewCol}
								variant="secondary"
								onClick={handleAddNewColumnBtnClick}
							>
								+ Add New Column
							</Button>
						</FormGroup>

						<Button onClick={handleCreateNewBoardSubmit}>
							Create New Board
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</>
	);
};

export default AddNewBoardModal;
