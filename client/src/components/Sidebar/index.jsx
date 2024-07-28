import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import cx from "classnames";
import { HideSideBarBtn } from "./hideSideBarBtn";
import styles from "./styles.module.scss";
import Slider from "@components/Sidebar/slider";
import AddNewBoardModal from "@components/core/Modals/AddNewBoardModal";
import { BoardIcon } from "./boardIcon";
import { GET_BOARDS } from "../../lib/graphql/queries";
import Link from "next/link";
import { useRouter } from "next/router";
import { Loading } from "@dev/Loading";

const Sidebar = ({ theme, toggleTheme }) => {
	const [isHidden, setIsHidden] = useState(false);
	const [addNewBoardModalOpen, setAddNewBoardModalOpen] = useState(false);
	const { loading, error, data } = useQuery(GET_BOARDS);

	const toggleSidebar = () => {
		setIsHidden(!isHidden);
	};

	const sidebarClass = cx(styles.sidebar, {
		[styles.isDisplayed]: !isHidden,
		[styles.isDarkMode]: theme === "dark",
	});

	const router = useRouter();
	const { slug } = router.query;

	let boardName = "";
	let boardId = "";
	if (slug) {
		const parts = slug.split("-");
		boardId = parts.pop();
		boardName = parts.join(" ");
	}

	if (loading) return <Loading />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className={sidebarClass}>
			{!isHidden && (
				<>
					<div className={styles.linkSection}>
						<span className={styles.allBoards}>ALL BOARDS</span>
						<a href="#" className={styles.sidebarLink}>
							<BoardIcon />
							Platform Launch
						</a>
						<a href="#" className={styles.sidebarLink}>
							<BoardIcon />
							Marketing Plan
						</a>
						<a href="#" className={styles.sidebarLink}>
							<BoardIcon />
							Roadmap
						</a>
						{data?.boards?.length > 0 ? (
							data.boards.map((singleBoard) => {
								const boardUrl = `/boards/${singleBoard.name.replace(/\s+/g, "-").toLowerCase()}-${singleBoard.id}`;

								const isActive = router.asPath === boardUrl;

								return (
									<Link
										key={singleBoard.id}
										href={boardUrl}
										className={cx(styles.sidebarLink, {
											[styles.activeSidebarLink]:
												isActive,
										})}
									>
										<BoardIcon />
										{singleBoard.name}
									</Link>
								);
							})
						) : (
							<p>No boards available</p>
						)}
						<a
							href="#"
							className={`${styles.createNewBoardLink} ${styles.sidebarLink}`}
							onClick={(e) => {
								e.preventDefault();
								setAddNewBoardModalOpen(!addNewBoardModalOpen);
							}}
						>
							<BoardIcon />+ Create New Board
						</a>
						{addNewBoardModalOpen && (
							<AddNewBoardModal
								addNewBoardModalOpen={addNewBoardModalOpen}
								setAddNewBoardModalOpen={
									setAddNewBoardModalOpen
								}
							/>
						)}
					</div>
					<Slider theme={theme} onToggle={toggleTheme} />
				</>
			)}
			<HideSideBarBtn
				isHidden={isHidden}
				toggleButton={toggleSidebar}
				theme={theme}
			/>
		</div>
	);
};

export default Sidebar;
