import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export const ListHeader = ({ name }) => {
	return (
		<>
			<span className={styles.headerIcon}></span>
			<div className={styles.listHeaderContainer}>{name}</div>
		</>
	);
};
