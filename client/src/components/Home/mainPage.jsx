import React from "react";
import { Lists } from "@components/lists/lists";
import styles from "./styles.module.scss";

export const MainPage = () => {
	return (
		<main className={styles.board}>
			<div>
				<span className={styles.empty}>
					<Lists />
				</span>
			</div>
		</main>
	);
};
