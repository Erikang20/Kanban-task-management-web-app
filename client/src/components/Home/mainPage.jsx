"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { Lists } from "@components/Lists/lists";
import styles from "./styles.module.scss";
import { GET_BOARD_BY_ID } from "../../lib/graphql/queries";

export const MainPage = () => {
	const [isEmpty, setEmpty] = useState(false);
	const router = useRouter();
	const { slug } = router;

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
	return (
		<div className={styles.board}>
			<div className={styles.boardContainer}>
				<div className={styles.boardContainerLists}>
					{isEmpty ? (
						<span className={styles.empty}>
							Create a new Board to get started
						</span>
					) : !data || !data.columns || data.columns.length === 0 ? (
						<Lists board={data?.board} />
					) : (
						<Lists board={data?.board} />
					)}
				</div>
			</div>
		</div>
	);
};
