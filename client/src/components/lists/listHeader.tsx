import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export const ListHeader = ({ name }) => {
	return <div className={styles.header}>{name}</div>;
};
