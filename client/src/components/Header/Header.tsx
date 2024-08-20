"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import AddNewTaskBtn from "@components/Header/addTaskBtn";
import LogoHeader from "@components/Header/logo";
import styles from "./styles.module.scss";
import { ThreeDotsMenu } from "./ThreeDotsMenu";
import { GET_BOARD_BY_ID } from "../../lib/graphql/queries";
import BoardTitle from "./BoardTitle";

export const Header = () => {
	const [theme, setTheme] = useState("light");
	const [isEmpty, setEmpty] = useState(false);
	const router = useRouter();
	// const { slug } = router;

	// Handle slug
	let boardName = "";
	let boardId = "";
	// if (slug) {
	// 	const parts = slug.split("-");
	// 	boardId = parts.pop();
	// 	boardName = parts.join(" ");
	// }

	const { loading, error, data } = useQuery(GET_BOARD_BY_ID, {
		skip: !boardId,
		variables: { id: boardId },
	});

	// useEffect(() => {
	// 	if (!slug) {
	// 		setEmpty(true);
	// 	}
	// }, [slug]);
	if (loading) return <p>Loading...</p>;
	if (error) return null;

	return (
		<div className={styles.headerRoot}>
			<div className={styles.headerLogoDiv}>
				<LogoHeader theme={theme} />
			</div>
			<div className={styles.headerTextDiv}>
				<div>
					<BoardTitle />
				</div>
				{!isEmpty && (
					<div className={styles.headerButtons}>
						{/* <AddNewTaskBtn board={data?.board} /> */}
						<ThreeDotsMenu board={data?.board} />
					</div>
				)}
			</div>
		</div>
	);
};
