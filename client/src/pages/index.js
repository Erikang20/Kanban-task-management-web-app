import { SEO } from "@src/components/SEO";
import AppLayout from "../layout/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
	return (
		<>
			<SEO title={"Homepage"} description={"Kanban task app"} />
			<AppLayout />
		</>
	);
}
