/*
 * The layout component to be used for the app would go here
 * This would house the sidebar
 * The header a
 * and render children of this components
 */
import Sidebar from "@components/Sidebar";
import AddNewTaskBtn from "@components/core/AddNewTaskBtn";

const AppLayout = () => {
	return (
		<>
			<AddNewTaskBtn />
			<Sidebar />
		</>
	);
};
export default AppLayout;
