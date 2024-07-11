import Image from "next/image";
import verticalEllipsis from "@assets/icon-vertical-ellipsis.svg";
import styles from "./styles.module.scss";

export const ThreeDotsMenu = () => {
	return (
		<Image
			className={styles.verticalEllipsis}
			src={verticalEllipsis}
			width="50"
			height="15"
			alt="icon"
		/>
	);
};
