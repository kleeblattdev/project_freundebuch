import { NavLink } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/addFriend">Add a new friend</NavLink>
		</nav>
	);
};

export default Navigation;
