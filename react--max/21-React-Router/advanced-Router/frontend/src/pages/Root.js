import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RoorLayout() {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RoorLayout;
