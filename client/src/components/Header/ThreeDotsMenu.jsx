import VerticalEllipsis from "@assets/icon-vertical-ellipsis.svg";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import DeleteBoardModal from "@components/core/Modals/DeleteBoardModal";
import EditBoardModal from "@components/core/Modals/EditBoardModal";
import { useRouter } from "next/navigation";
import { DELETE_BOARD, GET_BOARDS } from "@src/lib/graphql/queries";
import { useMutation } from "@apollo/client";

export const ThreeDotsMenu = ({ board }) => {
	const [menuVisible, setMenuVisible] = useState(false);
	const menuRef = useRef(null);
	const [deleteBoard] = useMutation(DELETE_BOARD, {
		refetchQueries: [{ query: GET_BOARDS }],
	});
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
	const router = useRouter();
	const handleCloseButtonClick = () => {
		setIsDeleteModalOpen(false);
		setEditBoardModalOpen(false);
	};

	const handleDeleteBoard = async () => {
		await deleteBoard({ variables: { id: board.id } });
		setIsDeleteModalOpen(false);
		router.refresh();

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
			<VerticalEllipsis className={styles.verticalEllipsis} alt="three dots" onClick={toggleMenu} />
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
						board={board}
					/>
				</div>
			)}
		</div>
	);
};
