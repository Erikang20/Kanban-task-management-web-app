import Head from "next/head";

const SEO = ({ title, description, image }) => {
	const absTitle = `${title} | Kanban Task Management`;
	const absDescription = description ? description : "";

	const pageUrl = typeof window !== "undefined" ? window.location.href : "";

	return (
		<Head>
			<title>{absTitle}</title>
			<link rel="shortcut icon" href="/logo.png" />

			<meta property="og:title" content={absTitle} />
			<meta property="og:description" content={absDescription} />
			{image && (
				<meta property="og:image" content={image} key="og-image" />
			)}
			<meta property="og:url" content={pageUrl} />
			<meta name="twitter:card" content="summary" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			></meta>
		</Head>
	);
};

export { SEO };
