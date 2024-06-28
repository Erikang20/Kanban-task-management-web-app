import styles from "./Components.module.css";
import { Button } from "@components/core";
const DevComponents = () => {
	return (
		<div>
			<h3 style={{ textAlign: "center", marginTop: "2rem" }}>View components here</h3>
			<div className={styles.Row}>
				<div className={styles.displayCard}>
					<Button
						theme={"light"}
						variant={"primary"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"light"}
						variant={"secondary"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"light"}
						variant={"danger"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
				</div>
				<div className={`${styles.displayCard} ${styles.dark}`}>
					<Button
						theme={"dark"}
						variant={"primary"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"dark"}
						variant={"secondary"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"dark"}
						variant={"danger"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
				</div>
			</div>
			<div className={styles.Row}>
				<div className={styles.displayCard}>
					<Button
						theme={"light"}
						variant={"primary"}
						size={"small"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"light"}
						variant={"secondary"}
						size={"small"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"light"}
						variant={"danger"}
						size={"small"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
				</div>
				<div className={`${styles.displayCard} ${styles.dark}`}>
					<Button
						theme={"dark"}
						variant={"primary"}
						size={"small"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"dark"}
						variant={"secondary"}
						size={"small"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
					<Button
						theme={"dark"}
						variant={"danger"}
						size={"small"}
						style={{ marginBottom: "1rem" }}
					>
						Click Button
					</Button>
				</div>
			</div>
		</div >
	);
};

export { DevComponents };
