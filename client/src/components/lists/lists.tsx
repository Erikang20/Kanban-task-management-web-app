import React from "react";
import styles from "./styles.module.scss";
import { ListHeader } from "./listHeader";
import { Cards } from "@components/Cards/cards";
import cx from "classnames";
import { Board } from "@src/lib/graphql/types";

const stringNames = {
	TODO: "BLUE",
	DOING: "PURPLE",
	DONE: "GREEN",
};
 interface ListProps {
	board:Board
}

export const Lists = ({ board }: ListProps) => {
	return (
		<div className={styles.listContainer}>
			{board.columns && board.columns.length > 0 ? (
				board.columns.map((column) => (
					<>
						<div className={styles.listHeaderContainer}>
							<div
								key={column.id}
								className={cx(styles.headerIcon, {
									[`${styles["headerIcon-" + "blue"]}`]: true,
								})}
							>
								<ListHeader name={column.name} />
							</div>
							<Cards />
						</div>
					</>
				))
			) : (
				<div className={styles.emptyList}>
					<p>There are no columns to display</p>
				</div>
			)}
		</div>
	);
};
