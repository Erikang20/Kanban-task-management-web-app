import React, { useState } from "react";
import Image from "next/image";
import cx from "classnames";
import showIcon from "@assets/icon-show-sidebar.svg";
import hideIcon from "@assets/icon-hide-sidebar.svg";
import styles from "./styles.module.scss";

export const HideSideBarBtn = (props) => {
	const [imgSrc, setImgSrc] = useState(hideIcon);

	const handleClick = () => {
		props.isHidden ? setImgSrc(hideIcon) : setImgSrc(showIcon);
		props.toggleButton();
	};

	const sidebarBtn = cx(styles.sideBarBtn, {
		[styles.isShowed]: !props.isHidden,
		[styles.isHidden]: props.isHidden,
	});

	return (
		<div className={styles.sideBarBtnContainer}>
			<button onClick={handleClick} className={sidebarBtn}>
				<Image
					className={styles.img}
					src={imgSrc}
					width={props.isHidden ? "25" : "50"}
					height={props.isHidden ? "22" : "18"}
					alt="icon"
				/>
				{!props.isHidden && (
					<span className={styles.hideSpan}>Hide Sidebar</span>
				)}
			</button>
		</div>
	);
};
