import React from "react";
import styles from "./Modals.module.css";

const DeleteBoardModal = ({ isOpen, onClose, onDelete }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<h4>Delete this board?</h4>
				<p>
					Are you sure you want to delete the "Platform Launch" board?
					This action will remove all columns and tasks and cannot be
					reversed.
				</p>
				<div className={styles.deleteModalButtons}>
					<button className={styles.deleteButton} onClick={onDelete}>
						Delete
					</button>
					<button className={styles.closeButton} onClick={onClose}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteBoardModal;
