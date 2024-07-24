import { SEO } from "@src/components/SEO";
import AppLayout from "../layout/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { GET_BOARDS } from "../lib/graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRouter } from "next/router.js";

export default function Home() {
	const { loading, error, data } = useQuery(GET_BOARDS);
	const router = useRouter();
	useEffect(() => {
		if (data && data.boards.length > 0) {
			const firstBoard = data.boards[0];
			const formattedBoardName = firstBoard.name
				.replace(/\s+/g, "-")
				.toLowerCase();
			const redirectUrl = `/boards/${formattedBoardName}-${firstBoard.id}`;
			router.push(redirectUrl);
		}
	}, [data, router]);

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error: {error.message}</p>;
	console.log(data);
	return (
		<>
			<SEO title={"Homepage"} description={"Kanban task app"} />
			<AppLayout />
		</>
	);
}
