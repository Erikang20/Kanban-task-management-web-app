import React, { useState } from "react";
import { Lists } from "@components/Lists/lists";
import styles from "./styles.module.scss";

export const MainPage = () => {
	const [isEmpty, setEmpty] = useState(false);

	return (
		<main className={styles.board}>
			<div className={styles.boardContainer}>
				<div className={styles.boardContainerLists}>
					{!isEmpty ? (
						<Lists />
					) : (
						<span className={styles.empty}>
							This board is empty. Create a new column to get
							started
						</span>
					)}
				</div>
			</div>
		</main>
	);
};
