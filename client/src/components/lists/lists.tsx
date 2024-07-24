import React from "react";
import styles from "./styles.module.scss";
import { ListHeader } from "./listHeader";
import { Cards } from "@components/Cards/cards";
import cx from "classnames";

const stringNames = {
	TODO: "BLUE",
	DOING: "PURPLE",
	DONE: "GREEN",
};

export const Lists = ({board}) => {
	return (
		<div className={styles.listContainer}>
			{Object.entries(stringNames).map(([key, color]) => (
				<>
					<div className={styles.listHeaderContainer}>
						<div
							key={key}
							className={cx(styles.headerIcon, {
								[`${styles["headerIcon-" + color.toLowerCase()]}`]:
									true,
							})}
						>
							<ListHeader name={key} />
						</div>
						<Cards />
					</div>
				</>
			))}
		</div>
	);
};
