import "./LoggedInNav.css";
import { Link } from "react-router-dom";

import React, {useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useHistory } from "react-router-dom";


const LoggedInNav = () => {
    const auth = useContext(AuthContext);
    let history = useHistory();

	function logoutHandler() {
		auth.onLogout();
		// console.log("in?")
		history.push("/");
	}
	return (
		<div className="sidenav">
			<Link to="/tracker">Tracker</Link>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/" onClick={logoutHandler}>Logout</Link>
		</div>
	);
};

export default LoggedInNav;
