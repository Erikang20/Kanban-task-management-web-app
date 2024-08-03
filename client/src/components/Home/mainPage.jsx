"use client";
import React, { useEffect, useState } from "react";
import { Lists } from "@components/Lists/lists";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { GET_BOARD_BY_ID } from "../../lib/graphql/queries";
import { useQuery } from "@apollo/client";
import { Loading } from "@dev/Loading";

export const MainPage = ({ theme }) => {
	const [isEmpty, setEmpty] = useState(false);
	const router = useRouter();
	const { slug } = router.query;

	console.log(theme);

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
	if (loading) return <Loading />;
	if (error) return null;

	return (
		<main className={styles.board}>
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
		</main>
	);
};
