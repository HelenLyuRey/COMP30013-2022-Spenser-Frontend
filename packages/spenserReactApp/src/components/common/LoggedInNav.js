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
		<>
		
		<div className="sidenav">
			<div className="sidenavtitle">
				Welcome!
			</div>

			<Link className="sidebaritem" to="/tracker">
					Tracker
			</Link>

			<Link className="sidebaritem" to="/dashboard">
				Dashboard
			</Link>
		
			<Link className="sidebaritem" to="/profile">
				Profile
			</Link>

			<Link className="sidebaritem" to="/" onClick={logoutHandler}>
				Logout
			</Link>

		</div>
		</>
	);
};

export default LoggedInNav;
