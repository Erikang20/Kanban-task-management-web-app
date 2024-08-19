import { useRouter } from "next/router";
import { Home } from "../../app/page";

export default function Page() {
	const router = useRouter();
	const { slug } = router.query;
	if (!slug) {
		return null;
	}

	const parts = slug.split("-");
	const id = parts.pop();
	const name = parts.join(" ");

	return (
		<>
			<Home />
		</>
	);
}
