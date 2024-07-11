import React, { useState } from "react";
import AddNewTaskBtn from "@components/Header/addTaskBtn";
import LogoHeader from "@components/Header/logo";
import styles from "./styles.module.scss";
import { ThreeDotsMenu } from "./ThreeDotsMenu";


export const Header = () => {
	const [theme, setTheme] = useState("light");

	return (
		<div className={styles.headerRoot}>
			<LogoHeader theme={theme} />
			<div className={styles.headerButtons}>
				<AddNewTaskBtn />
				<ThreeDotsMenu />
			</div>

		</div>
	);
};
