// import React from "./node_modules/react";
import "./LoggedInNav.css";
import { Link } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

import {useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useHistory } from "react-router-dom";


const TopNav = (props) => {
    const auth = useContext(AuthContext);
    let history = useHistory();

	function logoutHandler() {
		auth.onLogout();
		console.log("in?")
		history.push("/");
	}
	return (
		<div class="sidenav">
			<Link to="/tracker">Tracker</Link>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/" onClick={logoutHandler}>Logout</Link>
		</div>
	);
};

export default TopNav;
