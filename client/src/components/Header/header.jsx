import React, { useState } from "react";
import AddNewTaskBtn from "@components/Header/addTaskBtn";
import LogoHeader from "@components/Header/logo";
import styles from "./styles.module.scss";

export const Header = () => {
	const [theme, setTheme] = useState("light");

	return (
		<div className={styles.headerRoot}>
			<LogoHeader theme={theme} />
			<AddNewTaskBtn />
		</div>
	);
};
