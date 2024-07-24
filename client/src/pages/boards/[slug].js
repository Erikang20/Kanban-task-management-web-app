import { useRouter } from "next/router";
import { SEO } from "@src/components/SEO";
import AppLayout from "../../layout/index.jsx";
export default function Page() {
	const router = useRouter();
	const { slug } = router.query;
	if (!slug) {
		return null;
	}

	// Assuming the format of the slug is 'name-id'
	const parts = slug.split("-");
	const id = parts.pop();
	const name = parts.join(" ");
	console.log(name, id);
	return (
		<>
			{/* Post: {router.query.slug} */}
			<SEO title={name} description={"Kanban task app"} />
			<AppLayout />
		</>
	);
}
