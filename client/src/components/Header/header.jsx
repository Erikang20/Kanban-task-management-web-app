import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import cx from "classnames";
import AddNewTaskBtn from "@components/Header/addTaskBtn";
import LogoHeader from "@components/Header/logo";
import styles from "./styles.module.scss";
import { ThreeDotsMenu } from "./ThreeDotsMenu";
import { Loading } from "@dev/Loading";
import { useRouter } from "next/router";
import { GET_BOARD_BY_ID } from "../../lib/graphql/queries";

import BoardTitle from "./BoardTitle";

export const Header = ({ theme }) => {
	const [isEmpty, setEmpty] = useState(false);
	const router = useRouter();
	const { slug } = router.query;

	// Handle slug
	let boardName = "";
	let boardId = "";
	if (slug) {
		const parts = slug.split("-");
		boardId = parts.pop();
		boardName = parts.join(" ");
	}

	const { loading, error, data } = useQuery(GET_BOARD_BY_ID, {
		skip: !boardId,
		variables: { id: boardId },
	});

	useEffect(() => {
		if (!slug) {
			setEmpty(true);
		}
	}, [slug]);
	if (loading) return <Loading />;
	if (error) return null;

	const boardLogoClass = cx(styles.headerLogoDiv, {
		[styles.isDarkMode]: theme === "dark",
	});

	return (
		<div className={styles.headerRoot}>
			<div className={boardLogoClass}>
				<LogoHeader theme={theme} />
			</div>
			<div className={styles.headerTextDiv}>
				<div>
					<BoardTitle theme={theme} />
				</div>
				{!isEmpty && (
					<div className={styles.headerButtons}>
						<AddNewTaskBtn board={data?.board} />
						<ThreeDotsMenu board={data?.board} />
					</div>
				)}
			</div>
		</div>
	);
};
