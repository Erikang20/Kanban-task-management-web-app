// This is with reactstrap and bootstrap
import {
	Modal,
	ModalBody,
	FormGroup,
	Label,
	Form,
	Input,
	ModalHeader,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Modals.module.css";
import { Button } from "../Button";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import cross from "@assets/icon-cross.svg";
import { useMutation } from "@apollo/client";
import {
	CREATE_BOARD,
	GET_BOARDS,
	UPDATE_BOARD,
} from "../../../lib/graphql/queries";
import { useRouter } from "next/navigation";

const EditBoardModal = ({
	editBoardModalOpen,
	setEditBoardModalOpen,
	handleToggleEditBoard,
	board,
}) => {
	const [boardName, setBoardName] = useState("");
	const [boardColumns, setBoardColumns] = useState(["Todo", "Doing"]);
	const [newBoard, setNewBoard] = useState({
		boardName: boardName,
		boardColumns: boardColumns,
	});
	const [updateBoard] = useMutation(UPDATE_BOARD, {
		refetchQueries: [{ query: GET_BOARDS }],
	});
	const [errors, setErrors] = useState({
		boardName: "",
	});
	const router = useRouter();
	useEffect(() => {
		if (board) {
			setBoardName(board.name);
			setBoardColumns(board.columns);
		}
	}, [board]);

	const handleBoardNameChange = (e) => {
		const newBoardName = e.target.value;
		setBoardName(newBoardName);
	};

	const handleBoardColumnChange = (e) => {
		boardColumns[e.target.id] = e.target.value;
		setBoardColumns(boardColumns);
	};

	const handleEditColumnBtnClick = () => {
		e.stopPropagation();
		setBoardColumns([...boardColumns, ""]);
	};

	const handleXBtnClick = (e) => {
		e.stopPropagation();
		const newBoardColumns = [...boardColumns];
		newBoardColumns.splice(e.target.id, 1);
		setBoardColumns(newBoardColumns);
	};

	const handleUpdateBoard = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (boardName) {
			setErrors({ boardName: "" });
			await updateBoard({ variables: { id: board.id, name: boardName } });
			setEditBoardModalOpen(false);
			router.replace(
				`/boards/${boardName.replace(/\s+/g, "-").toLowerCase()}-${board.id}`,
			);
		} else {
			setErrors({ boardName: "Board name is required" });
		}
	};
	const handleOutsideClick = (e) => {
		setEditBoardModalOpen(false);
	};

	if (!editBoardModalOpen) {
		return null;
	}

	return (
		<div className={styles.modalOverlay} onClick={handleOutsideClick}>
			<div
				className={styles.modalContent}
				onClick={(e) => e.stopPropagation()}
			>
				<div>
					<h5 className={styles.modalHeader}>Edit Board</h5>
				</div>

				<Form>
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
							value={boardName}
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
											onChange={handleBoardColumnChange}
										/>
										<button
											id={index}
											type="button"
											className={styles.xBtn}
											onClick={handleXBtnClick}
										>
											<Image
												id={index}
												className={styles.cross}
												src={cross}
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
							onClick={handleEditColumnBtnClick}
						>
							+ Add New Column
						</Button>
					</FormGroup>

					<Button onClick={handleUpdateBoard}>Update Board</Button>
				</Form>
			</div>
		</div>
	);
};

export default EditBoardModal;
