import { Board } from "@src/lib/graphql/types";
import React from "react";
import styles from "./styles.module.scss";
import { ListHeader } from "./listHeader";
import { Cards } from "@components/Cards/cards";
import cx from "classnames";
import AddColumnButton from "@components/Home/AddColumnButton";

type Props = {
	board: Board;
};

const AllColumns = ({ board }: Props) => {
	return (
		<>
			{board.columns.map((column) => (
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
			))}

            <div className={styles.addColumnButtonContainer}>
                <AddColumnButton board={board} filled={false} text={'+ New Column'} />
            </div>
		</>
	);
};

export default AllColumns;
