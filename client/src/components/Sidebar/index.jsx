import React, { useState } from "react";
import cx from "classnames";
import styled, { ThemeProvider } from "styled-components";
import { HideSideBarBtn } from "./hideSideBarBtn";
import styles from "./styles.module.scss";
import Slider from "@components/Sidebar/slider";
import AddNewBoardModal from "@components/core/Modals/AddNewBoardModal";
import {
	lightThemeSideBar,
	darkThemeSideBar,
	GlobalStyles,
} from "@components/Home/theme";
import { BoardIcon } from "./boardIcon";
import LogoHeader from "@components/Header/logo";

const StyledSidebarComponent = styled.div`
	background-color: ${(props) => props.theme.body};
`;

const Sidebar = () => {
	const [isHidden, setIsHidden] = useState(false);
	const [isToggled, setIsToggle] = useState(false);
	const [addNewBoardModalOpen, setAddNewBoardModalOpen] = useState(false);
	const [theme, setTheme] = useState("light");

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const toggleSidebar = () => {
		setIsHidden(!isHidden);
	};

	const onThemeChanged = () => {
		setIsToggle(!isToggled);
		themeToggler(theme);
	};

	const sidebarClass = cx(styles.sidebar, {
		[styles.isDisplayed]: !isHidden,
		[styles.isDarkMode]: theme === "dark",
	});

	return (
		<ThemeProvider
			theme={theme === "light" ? lightThemeSideBar : darkThemeSideBar}
		>
			<StyledSidebarComponent>
				<GlobalStyles />
				<div className={sidebarClass}>
					{!isHidden && (
						<>
							<LogoHeader theme={theme} />
							<div className={styles.linkSection}>
								<span className={styles.allBoards}>
									ALL BOARDS
								</span>
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
								<a
									href="#"
									className={`${styles.createNewBoardLink} ${styles.sidebarLink}`}
									onClick={(e) => {
										e.preventDefault();
										setAddNewBoardModalOpen(
											!addNewBoardModalOpen,
										);
									}}
								>
									<BoardIcon />+ Create New Board
								</a>
								{addNewBoardModalOpen && (
									<AddNewBoardModal
										addNewBoardModalOpen={
											addNewBoardModalOpen
										}
										setAddNewBoardModalOpen={
											setAddNewBoardModalOpen
										}
									/>
								)}
							</div>
						</>
					)}
					<>
						<Slider
							isToggled={isToggled}
							onToggle={() => onThemeChanged(!isToggled)}
						/>
						<HideSideBarBtn
							isHidden={isHidden}
							toggleButton={toggleSidebar}
						/>
					</>
				</div>
			</StyledSidebarComponent>
		</ThemeProvider>
	);
};

export default Sidebar;
