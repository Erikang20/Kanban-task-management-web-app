import React from "react";
import cx from "classnames";
import ShowIcon from "@assets/icon-show-sidebar.svg";
import HideIcon from "@assets/icon-hide-sidebar.svg";
import styles from "./styles.module.scss";

export const HideSideBarBtn = (props) => {

	const handleClick = () => {
		props.toggleButton();
	};

	const sidebarBtn = cx(styles.sideBarBtn, {
		[styles.isShowed]: !props.isHidden,
		[styles.isHidden]: props.isHidden,
		[styles.isDarkMode]: props.theme === "dark",
	});

	return (
		<div className={styles.sideBarBtnContainer}>
			<button onClick={handleClick} className={sidebarBtn}>
				{props.isHidden ? 
				<ShowIcon className={styles.img} alt="show icon" /> 
				: 
				<HideIcon className={styles.img} alt="hide icon" /> 
				}
		
				{!props.isHidden && (
					<span className={styles.hideSpan}>Hide Sidebar</span>
				)}
			</button>
		</div>
	);
};
