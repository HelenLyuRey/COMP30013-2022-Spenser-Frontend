// import React from "./node_modules/react";
import "./LoggedInNav.css";
import { Link } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

import {useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
	containerNavbar:{
		display: "flex",
		width: "100"
	},
	containerLogo: {
		textAlign: "left",
		alignItems: "left",
		justifyContent: "left",
	},
}));

const TopNav = (props) => {
	const classes = useStyles();
    const auth = useContext(AuthContext);
    let history = useHistory();

	function logoutHandler() {
		auth.onLogout();
		history.push("/");
	}
	return (
		<div className="topNav-1">
			<Grid container spacing={5} className={classes.containerNavbar}>

				<Grid item xs={12} md={1}>
					<div className="navButtons">
						<Link to="/dashboard" style={{color: props.dashboard}}>
                            Dashboard
						</Link>
					</div>
				</Grid>


				<Grid item xs={12} md={1} >
					<div className="navButtons">
						<Link to="/profile" style={{color: props.profile }} data-testid="profile">
                            Profile
						</Link>
					</div>
				</Grid>
					

				<Grid item xs={12} md={1} >
					<div className="navButtons"
                        onClick={logoutHandler}>
                        {/* {auth.onLogout()} */}
						<Link to="/auth/logout" style={{color: props.logout}} data-testid="logout">
							Logout
						</Link>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default TopNav;
