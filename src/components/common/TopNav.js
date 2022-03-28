// import React from "./node_modules/react";
import "./TopNav.css";
import { Link } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

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
	return (
		<div className="topNav-1">
			<Grid container spacing={5} className={classes.containerNavbar}>
				<Grid item xs={12} md={6} className={classes.containerLogo}>
					<div className="logoAndName">
						<Link to="/">{props.emoj}</Link>
					</div>
				</Grid>

				<Grid item xs={12} md={1}>
					<div className="homePage">
						<Link to="/" style={{color: props.home}}>
							Home
						</Link>
					</div>
				</Grid>


				<Grid item xs={12} md={1} >
					<div className="login">
						<Link to="/auth/login" style={{color: props.login }} data-testid="login">
							Login
						</Link>
					</div>
				</Grid>
					

				<Grid item xs={12} md={1} >
					<div className="login">
						<Link to="/auth/signup" style={{color: props.signup}} data-testid="signup">
							Sign Up
						</Link>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default TopNav;
