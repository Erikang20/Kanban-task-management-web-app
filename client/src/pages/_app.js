import "@src/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
export default function App({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
