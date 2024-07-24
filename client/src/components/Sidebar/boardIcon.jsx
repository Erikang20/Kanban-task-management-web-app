// import Image from "next/image";
// import iconBoard from "@assets/icon-board.svg";
// import styles from "./styles.module.scss";

import IconBoard from "../../assets/icon-board.svg";
import styles from "./styles.module.scss";

const BoardIcon = () => {
	return (
		<IconBoard className={styles.boardIconBtn} width='16' height='16' fill='red'
		/>
	);
};
export default BoardIcon;

// export const BoardIcon = () => {
// 	return (
// 		<Image
// 			className={styles.boardIconBtn}
// 			src={iconBoard}
// 			width="50"
// 			height="15"
// 			alt="icon"
// 		/>
// 	);
// };