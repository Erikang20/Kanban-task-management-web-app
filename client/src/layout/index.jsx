/*
 * The layout component to be used for the app would go here
 * This would house the sidebar
 * The header a
 * and render children of this components
 */
import Sidebar from "@components/Sidebar";
import Header from "@components/Header";
import styles from "./styles.module.scss";

const AppLayout = ({children}) => {
	return (
		<div className={styles.body}>
			<Sidebar />
			{/* <Header /> */}
			{/* children */}
			{children}
		</div>
	);
};
export default AppLayout;
