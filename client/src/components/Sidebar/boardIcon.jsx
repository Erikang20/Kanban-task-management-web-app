import Image from "next/image";
import iconBoard from "@assets/icon-board.svg";
import styles from "./styles.module.scss";

export const BoardIcon = () => {
	return (
		<Image
			className={styles.boardIconBtn}
			src={iconBoard}
			width="50"
			height="15"
			alt="icon"
		/>
	);
};
