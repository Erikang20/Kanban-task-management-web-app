import verticalEllipsis from "@assets/icon-vertical-ellipsis.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import DeleteBoardModal from "@components/core/Modals/DeleteBoardModal";
import EditBoardModal from "@components/core/Modals/EditBoardModal";

export const ThreeDotsMenu = ({ board }) => {
	const [menuVisible, setMenuVisible] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setMenuVisible(false);
		}
	};

	useEffect(() => {
		if (menuVisible) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuVisible]);

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [editBoardModalOpen, setEditBoardModalOpen] = useState(false);

	const handleDeleteButtonClick = () => {
		setIsDeleteModalOpen(true);
	};

	const handleCloseButtonClick = () => {
		setIsDeleteModalOpen(false);
		setEditBoardModalOpen(false);
	};

	const handleDeleteBoard = () => {
		setIsDeleteModalOpen(false);
	};

	const handleEditButtonClick = () => {
		setEditBoardModalOpen(true);
	};

	const handleEditBoard = () => {
		setEditBoardModalOpen(false);
	};
	const handleToggleEditBoard = () => {
		setEditBoardModalOpen(!editBoardModalOpen);
	};
	
	return (
		<div className={styles.container} ref={menuRef}>
			<Image
				className={styles.verticalEllipsis}
				src={verticalEllipsis}
				width={50}
				height={15}
				alt="icon"
				onClick={toggleMenu}
			/>
			{menuVisible && (
				<div className={styles.menu}>
					<ul>
						<li
							className={styles.edit}
							onClick={handleEditButtonClick}
						>
							Edit Board
						</li>
						<li
							className={styles.delete}
							onClick={handleDeleteButtonClick}
						>
							Delete Board
						</li>
					</ul>
					<DeleteBoardModal
						isOpen={isDeleteModalOpen}
						onClose={handleCloseButtonClick}
						onDelete={handleDeleteBoard}
					/>

					<EditBoardModal
						editBoardModalOpen={editBoardModalOpen}
						setEditBoardModalOpen={setEditBoardModalOpen}
						handleToggleEditBoard={handleCloseButtonClick}
					/>
				</div>
			)}
		</div>
	);
};
