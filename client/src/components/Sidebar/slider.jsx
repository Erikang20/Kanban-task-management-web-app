import React, { useState } from "react";
import styles from "./styles.module.scss";

const Slider = ({ isToggled, onToggle }) => {
	return (
		<label className={styles.sliderSection}>
			<input type="checkbox" checked={isToggled} onChange={onToggle} />
			<span className={styles.slider}></span>
		</label>
	);
};

export default Slider;
