import { useRouter } from "next/router";
// import { Home } from "../../app/page";

export default function Page() {
	const router = useRouter();
	const { slug } = router.query;

	return <>HELLO</>;
}
