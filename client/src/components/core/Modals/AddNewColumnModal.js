// This is with reactstrap and bootstrap
import { Modal, ModalBody, FormGroup, Label, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Modals.module.css";
import { Button } from "../Button";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_COLUMN, GET_BOARDS } from "../../../lib/graphql/queries";

const AddNewColumn = ({
	addNewColumnModalOpen,
	setAddNewColumnModalOpen,
	boardId,
}) => {
	const [inputValue, setInputValue] = useState("");
	const [columnName, setColumnName] = useState("");

	const [createColumn] = useMutation(CREATE_COLUMN, {
		refetchQueries: [{ query: GET_BOARDS }],
	});
	const [errors, setErrors] = useState({
		columnName: "",
	});

	const handleColumnNameChange = (e) => {
		setInputValue(e.target.value);
		const newColumnName = e.target.value;
		setColumnName(newColumnName);
	};
	const handleCreateNewColumnSubmit = async (e) => {
		e.preventDefault();
		if (columnName) {
			setErrors({ columnName: "" });
			try {
				const { data } = await createColumn({
					variables: { boardId, name: columnName },
				});

				setAddNewColumnModalOpen(false);
			} catch (error) {
				console.error("Error creating board or columns:", error);
			}
		} else {
			setErrors({ columnName: "Column name is required" });
		}
	};
	const toggleModal = () => {
		setAddNewColumnModalOpen(false);
	};
	return (
		<>
			<Modal
				toggle={toggleModal}
				className={styles.modalDiv}
				isOpen={addNewColumnModalOpen}
			>
				<ModalBody>
					<h5 className={styles.modalHeader}>Add New Column</h5>
					<Form onSubmit={() => setAddNewColumnModalOpen(false)}>
						<FormGroup>
							<Label
								className={styles.modalLabel}
								htmlFor="columnName"
							>
								Column Name
							</Label>
							<Input
								name="columnName"
								placeholder="e.g. Web Design"
								className={styles.modalInput}
								onChange={handleColumnNameChange}
							/>
							{errors.columnName && (
								<span className={styles.error}>
									{errors.columnName}
								</span>
							)}
						</FormGroup>

						<Button onClick={handleCreateNewColumnSubmit}>
							Create New Column
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</>
	);
};

export default AddNewColumn;
