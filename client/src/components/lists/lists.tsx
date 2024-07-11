import React from "react";
import styles from "./styles.module.scss";
import { ListHeader } from "./listHeader";
import { Cards } from "@components/Cards/cards";

const stringNames = ["TODO", "DOING", "DONE"];

export const Lists = () => {
	return (
		<div className={styles.listContainer}>
			{stringNames.map((name) => (
				<div className={styles.columns} key={name}>
					<ListHeader name={name} />
					<Cards />
				</div>
			))}
		</div>
	);
};
