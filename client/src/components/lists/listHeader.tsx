import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export const ListHeader = ({ name }) => {
	return (
		<>
			{/* Empty spam for the icon next to the title TODO: Remove this comment when we are displaying the colors correctly */}
			<span className={styles.headerIcon}></span>
			<div className={styles.listHeaderContainer}>{name}</div>
		</>
	);
};
