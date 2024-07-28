import React from "react";
import styles from "./styles.module.scss";
import LogoLight from "@assets/logo-light.svg";
import LogoDark from "@assets/logo-dark.svg";

const LogoHeader = ({ theme }) => {
	return (
		<>
			{theme === "light" ? (
				<LogoDark className={styles.logo} alt="dark logo" />
			) : (
				<LogoLight className={styles.logo} alt="light logo" />
			)}
		</>
	);
};

export default LogoHeader;
