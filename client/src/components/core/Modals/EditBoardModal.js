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
import Cross from "@assets/icon-cross.svg";
import { useMutation } from "@apollo/client";
import {
	CREATE_BOARD,
	CREATE_COLUMN,
	DELETE_COLUMN,
	GET_BOARDS,
	UPDATE_BOARD,
	UPDATE_COLUMN,
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
	const [initialColumns, setInitialColumns] = useState([]);
	const [updateBoard] = useMutation(UPDATE_BOARD, {
		refetchQueries: [{ query: GET_BOARDS }],
	});
	const [deleteColumn] = useMutation(DELETE_COLUMN, {
		refetchQueries: [{ query: GET_BOARDS }],
	});

	const [createColumn] = useMutation(CREATE_COLUMN, {
		refetchQueries: [{ query: GET_BOARDS }],
	});

	const [updateColumn] = useMutation(UPDATE_COLUMN, {
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
			setInitialColumns(board.columns);
		}
	}, [board]);

	const handleBoardNameChange = (e) => {
		const newBoardName = e.target.value;
		setBoardName(newBoardName);
	};

	const handleBoardColumnChange = (e) => {
		const updatedColumns = [...boardColumns];

		updatedColumns[e.target.id] = {
			...updatedColumns[e.target.id],
			name: e.target.value,
		};

		setBoardColumns(updatedColumns);
	};

	const handleEditColumnBtnClick = (e) => {
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
		if (boardName) {
			setErrors({ boardName: "" });
			try {
				await updateBoard({
					variables: { id: board.id, name: boardName },
				});

				const removedColumns = initialColumns.filter(
					(initialColumn) =>
						!boardColumns.some(
							(updatedColumn) =>
								updatedColumn.id === initialColumn.id,
						),
				);

				for (let column of removedColumns) {
					await deleteColumn({
						variables: {
							id: column.id,
						},
					});
				}

				for (let column of boardColumns) {
					if (column.id) {
						await updateColumn({
							variables: {
								id: column.id,
								name: column.name,
							},
						});
					} else {
						await createColumn({
							variables: {
								boardId: board.id,
								name: column.name,
							},
						});
					}
				}

				setEditBoardModalOpen(false);
				router.replace(
					`/boards/${boardName
						.replace(/\s+/g, "-")
						.toLowerCase()}-${board.id}`,
				);
			} catch (error) {
				console.error("Error updating board:", error);
			}
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

					<Cross
						className={`${styles.cross} ${styles.mainCross}`}
						alt="X"
						onClick={handleToggleEditBoard}
					/>
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
											value={item.name}
											onChange={handleBoardColumnChange}
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
