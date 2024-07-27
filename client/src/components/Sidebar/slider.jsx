import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import DarkThemeIcon from "@assets/icon-dark-theme.svg";
import LightThemeIcon from "@assets/icon-light-theme.svg";

const Slider = ({ isToggled, onToggle }) => {
	const sliderCx = cx(styles.lightDarkModeIconSection, {
		[styles.isDarkMode]: isToggled,
	});

	return (
		<div className={sliderCx}>
			<LightThemeIcon className={styles.lightModeIcon} alt="light theme icon" />
			<label className={styles.sliderSection}>
				<input
					type="checkbox"
					checked={isToggled}
					onChange={onToggle}
				/>
				<span className={styles.slider}></span>
			</label>
			<DarkThemeIcon className={styles.darkModeIcon} alt="dark theme icon" />
		</div>
	);
};

export default Slider;
