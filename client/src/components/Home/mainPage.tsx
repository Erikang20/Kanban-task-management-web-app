import React from "react";
import styles from "./styles.module.scss";

export const MainPage = () => {
	return (
		<main>
			<div className={styles.board}>
				<span className={styles.empty}>
					This board is empty. Create a new column to get started
				</span>
			</div>
		</main>
	);
};
