import React from "react";
import styles from "./styles.module.scss";
import { ListHeader } from "./listHeader";
import { Cards } from "@components/Cards/cards";
import cx from "classnames";
import { Board } from "@src/lib/graphql/types";
import AddColumnButton from "@components/Home/AddColumnButton";
import AllColumns from "./allColumns";
const stringNames = {
	TODO: "BLUE",
	DOING: "PURPLE",
	DONE: "GREEN",
};
interface ListProps {
	board: Board;
}

export const Lists = ({ board }: ListProps) => {
	return (
		<div className={styles.listContainer}>
			{board.columns && board.columns.length > 0 ? (
				<AllColumns board={board} />
			) : (
				<div className={styles.emptyList}>
					<p>There are no columns to display</p>
					<AddColumnButton board={board} text={"+ Add New Column"} />
				</div>
			)}
		</div>
	);
};
