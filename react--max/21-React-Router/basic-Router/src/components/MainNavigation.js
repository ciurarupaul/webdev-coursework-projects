import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							end // added ca sa nu apara '/' highlighted at all times
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/products"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
