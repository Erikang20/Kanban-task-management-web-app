import React from "react";
import classNames from "classnames";
import { SidebarButton } from "@components/core";
import useSidebar from "@components/Sidebar/useSidebar";
import styles from "./styles.module.scss";

const Sidebar = () => {
	const { isHidden, toggleSidebar } = useSidebar();

	const sidebarClass = classNames(styles.sidebar, {
		[styles.isDisplayed]: !isHidden,
	});

	return (
		<div className={sidebarClass}>
			{!isHidden && (
				<div>
					<span className={styles.boards}>ALL BOARDS</span>
					<p>👩‍💻 board-1</p>
					<p>🎯 board-2</p>
					{/* other sidebar components */}
				</div>
			)}
			<SidebarButton isHidden={isHidden} toggleButton={toggleSidebar} />
		</div>
	);
};

export default Sidebar;
