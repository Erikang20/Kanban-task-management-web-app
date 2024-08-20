"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, ApolloProvider } from "@apollo/client";
import Sidebar from "@components/Sidebar/index";
import { Header } from "@components/Header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { GET_BOARDS, GET_BOARD_BY_ID } from "../lib/graphql/queries";
import { Lists } from "@components/Lists/lists";

let boardId = "";

function Home() {
	const [isEmpty, setEmpty] = useState(false);
	const { loading, error, data } = useQuery(GET_BOARD_BY_ID, {
		skip: !boardId,
		variables: { id: boardId },
	});

	const router = useRouter();
	// const { loading, error, data } = useQuery(GET_BOARDS);
	// const router = useRouter();
	// // console.log(data);

	// useEffect(() => {
	// 	if (data && data.boards.length > 0) {
	// 		const firstBoard = data.boards[0];
	// 		const formattedBoardName = firstBoard.name
	// 			.replace(/\s+/g, "-")
	// 			.toLowerCase();
	// 		const redirectUrl = `/boards/${formattedBoardName}-${firstBoard.id}`;
	// 		router.push(redirectUrl);
	// 	}
	// }, [data, router]);

	/**
   * From the main page:
   * 
	
	// const { slug } = router;

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

	useEffect(() => {
		if (error) {
			router.push("/");
		}
	}, [error, router]);

	// useEffect(() => {
	// 	if (!slug) {
	// 		setEmpty(true);
	// 	}
	// }, [slug]);
	if (loading) return <p>Loading...</p>;
	if (error) return null;
   */

	return (
		<main>
			<Header />
			<div className="main-body">
				<Sidebar />
				<div className="board">
					<div className="boardContainer">
						<div className="boardContainerLists">
							{isEmpty ? (
								<span className="empty">
									Create a new Board to get started
								</span>
							) : !data ||
							  !data.columns ||
							  data.columns.length === 0 ? (
								<Lists board={data?.board} />
							) : (
								<Lists board={data?.board} />
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
