import verticalEllipsis from "@assets/icon-vertical-ellipsis.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import DeleteBoardModal from "@components/core/Modals/DeleteBoardModal";

export const ThreeDotsMenu = () => {
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

	//handle delete modal options
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const handleDeleteButtonClick = () => {
		setIsDeleteModalOpen(true);
	};

	const handleCloseButtonClick = () => {
		setIsDeleteModalOpen(false);
	};

	const handleDeleteBoard = () => {
		alert("deleted");
		setIsDeleteModalOpen(false);
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
						<li className={styles.edit}>Edit Board</li>
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
				</div>
			)}
		</div>
	);
};
