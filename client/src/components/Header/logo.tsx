import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import logoLight from "@assets/logo-light.svg";
import logoDark from "@assets/logo-dark.svg";

const LogoHeader = ({ theme }) => {
	return (
		<>
			<Image
				className={styles.logo}
				src={theme === "light" ? logoDark : logoLight}
				width="200"
				height="60"
				alt="icon"
			/>
		</>
	);
};

export default LogoHeader;
