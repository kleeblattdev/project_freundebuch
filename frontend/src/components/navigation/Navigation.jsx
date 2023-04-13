import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/addFriend">add a new friend</NavLink>
		</nav>
	);
};

export default Navigation;
