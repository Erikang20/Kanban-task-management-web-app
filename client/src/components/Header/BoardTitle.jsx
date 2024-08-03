import cx from "classnames";
import styles from "./styles.module.scss";

const BoardTitle = ({ theme }) => {
	const boardTitleClass = cx(styles.boardTitle, {
		[styles.isDarkMode]: theme === "dark",
	});

	return <div className={boardTitleClass}>Platform Launch</div>;
};

export default BoardTitle;
