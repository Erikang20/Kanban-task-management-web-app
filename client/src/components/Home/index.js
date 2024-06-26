import { Button } from "@components/core";
import styles from "./style.module.css";
import Link from "next/link";

const HomepageContent = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Welcome Kanban Task Management </h1>
			<div className={styles.buttonRow}>
				<Link href={"/kanban"}>
					<Button className={styles.button}>Click to view components</Button>
				</Link>
			</div>
		</div>
	);
};

export default HomepageContent;
