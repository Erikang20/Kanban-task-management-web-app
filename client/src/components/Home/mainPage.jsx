"use client";
import React, { useEffect, useState } from "react";
import { Lists } from "@components/Lists/lists";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { GET_BOARDS, GET_BOARD_BY_ID } from "../../lib/graphql/queries";
import { useQuery } from "@apollo/client";

export const MainPage = () => {
	const [isEmpty, setEmpty] = useState(false);
	const router = useRouter();
	const { slug } = router.query;

	let boardName = "";
	let boardId = "";
	if (slug) {
		const parts = slug.split("-");
		boardId = parts.pop();
		boardName = parts.join(" ");
	}
	console.log(boardName, boardId);
	const { loading, error, data } = useQuery(GET_BOARD_BY_ID, {
		skip: !boardId,
		variables: { id: boardId },
	});

	useEffect(() => {
		if (error) {
			router.push("/");
		}
	}, [error, router]);

	useEffect(() => {
		if (!slug) {
			setEmpty(true);
		}
	}, [slug]);
	if (loading) return <p>Loading...</p>;
	if (error) return null;
	console.log(data);
	return (
		<main className={styles.board}>
			<div className={styles.boardContainer}>
				<div className={styles.boardContainerLists}>
					{!isEmpty ? (
						<Lists board={data?.board} />
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
