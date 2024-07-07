import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { SidebarButton } from "@components/core";
import styles from "./styles.module.scss";
import darkThemeIcon from "@assets/icon-dark-theme.svg";
import lightThemeIcon from "@assets/icon-light-theme.svg";
import logoLight from "@assets/logo-light.svg";
import Slider from "@components/Sidebar/slider";
import AddNewBoard from "@components/core/AddNewBoard/AddNewBoard";

const Sidebar = () => {
	const [isHidden, setIsHidden] = useState(false);
	const [isToggled, setIsToggle] = useState(false);
	const [addNewBoardModalOpen, setAddNewBoardModalOpen] = useState(false);

	const toggleSidebar = () => {
		setIsHidden(!isHidden);
	};

	const sidebarClass = classNames(styles.sidebar, {
		[styles.isDarkMode]: false,
		[styles.isLightMode]: true,
		[styles.isDisplayed]: !isHidden,
	});

	return (
		<div className={sidebarClass}>
			{!isHidden && (
				<>
					<div>
						<h1>
							<Image
								className={styles.logo}
								src={logoLight}
								width="100"
								height="30"
								alt="icon"
							/>
							Kanban
						</h1>
					</div>
					<span className={styles.allBoards}>ALL BOARDS</span>
					<div className={styles.linkSection}>
						<a href="#" className={styles.sidebarLink}>Platform Launch</a>
						<a href="#" className={styles.sidebarLink}>Marketing Plan</a>
						<a href="#" className={styles.sidebarLink}>Roadmap</a>
						<a href="#" className={`${styles.createNewBoardLink} ${styles.sidebarLink}`}
							onClick={(e) => {
								e.preventDefault();
								setAddNewBoardModalOpen(!addNewBoardModalOpen);
							}}>+Create New Board</a>

						{addNewBoardModalOpen &&
							<AddNewBoard
								addNewBoardModalOpen={addNewBoardModalOpen}
								setAddNewBoardModalOpen={setAddNewBoardModalOpen}
							/>
						}
					</div>

					<div className={styles.lightDarkModeIconSection}>
						<Image
							className={styles.lightModeIcon}
							src={lightThemeIcon}
							width="20"
							height="18"
							alt="icon"
						/>
						<Slider
							isToggled={isToggled}
							onToggle={() => setIsToggle(!isToggled)}
						/>
						<Image
							className={styles.darkModeIcon}
							src={darkThemeIcon}
							width="18"
							height="18"
							alt="icon"
						/>
					</div>
				</>
			)}
			<SidebarButton isHidden={isHidden} toggleButton={toggleSidebar} />
		</div>
	);
};

export default Sidebar;
