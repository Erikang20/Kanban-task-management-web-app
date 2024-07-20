import React, { useState } from "react";
import AddNewTaskBtn from "@components/Header/addTaskBtn";
import LogoHeader from "@components/Header/logo";
import styles from "./styles.module.scss";
import { ThreeDotsMenu } from "./ThreeDotsMenu";
import BoardTitle from "./BoardTitle";


export const Header = () => {
	const [theme, setTheme] = useState("light");

	return (
		<div className={styles.headerRoot}>
			<div className={styles.headerLogoDiv}>
				<LogoHeader theme={theme} />
			</div>
			<div className={styles.headerTextDiv}>
				<div>
					<BoardTitle />
				</div>

				<div className={styles.headerButtons}>
					<AddNewTaskBtn />
					<ThreeDotsMenu />
				</div>


			</div>

		</div>
	);
};
