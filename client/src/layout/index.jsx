/*
 * The layout component to be used for the app would go here
 * This would house the sidebar
 * The header a
 * and render children of this components
 */
import Sidebar from "@components/Sidebar";
import { MainPage } from "@components/Home/mainPage";
import styles from "./styles.module.scss";

const AppLayout = () => {
	return (
		<div className={styles.body}>
			<Sidebar />
			<MainPage />
		</div>
	);
};

export default AppLayout;
