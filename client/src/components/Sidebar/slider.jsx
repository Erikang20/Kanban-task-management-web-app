import React from "react";
import Image from "next/image";
import cx from "classnames";
import styles from "./styles.module.scss";
import darkThemeIcon from "@assets/icon-dark-theme.svg";
import lightThemeIcon from "@assets/icon-light-theme.svg";

const Slider = ({ isToggled, onToggle }) => {
	const sliderCx = cx(styles.lightDarkModeIconSection, {
		[styles.isDarkMode]: isToggled,
	});

	return (
		<div className={sliderCx}>
			<Image
				className={styles.lightModeIcon}
				src={lightThemeIcon}
				width="20"
				height="18"
				alt="icon"
			/>
			<label className={styles.sliderSection}>
				<input
					type="checkbox"
					checked={isToggled}
					onChange={onToggle}
				/>
				<span className={styles.slider}></span>
			</label>
			<Image
				className={styles.darkModeIcon}
				src={darkThemeIcon}
				width="18"
				height="18"
				alt="icon"
			/>
		</div>
	);
};

export default Slider;
