import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, ApolloProvider } from "@apollo/client";
import Sidebar from "@components/Sidebar/index";
import { Header } from "@components/Header/Header";
import { MainPage } from "@components/Home/mainPage";
// import "bootstrap/dist/css/bootstrap.min.css";
import { GET_BOARDS } from "../lib/graphql/queries";
import "./globals.css";

function Home() {
	// const { loading, error, data } = useQuery(GET_BOARDS);
	// const { data } = await ApolloWrapper().query({ query: GET_BOARDS });
	// const router = useRouter();

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

	return (
		<main>
			<Header />
			<div className="main-body">
				<Sidebar />
				<MainPage />
			</div>
		</main>
	);
}

export default Home;
