import Sidebar from "@components/Sidebar";
import { Header } from "@components/Header/header";
import { MainPage } from "@components/Home/mainPage";

const AppLayout = () => {
	return (
		<div className="root">
			<Header />
			<div className="main-body">
				<Sidebar />
				<MainPage />
			</div>
		</div>
	);
};
export default AppLayout;
