import React from 'react';
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
				<Grid item xs={12} md={4} className={classes.containerLogo}>
					<div className="logoAndName">
						{/* <Link to="/">{props.emoj}</Link> */}
						<Link to="/"> + </Link>
					</div>
				</Grid>

				<Grid item xs={12} md={2}>
					<div className="topnav-button">
						<Link to="/" style={{color: props.home}}>
							Home
						</Link>
					</div>
				</Grid>

				<Grid item xs={12} md={2}>
					<div className="topnav-button">
						<Link to="/feature" style={{color: props.feature}}>
							Features
						</Link>
					</div>
				</Grid>


				<Grid item xs={12} md={2} >
					<div className="topnav-button">
						<Link to="/auth/login" style={{color: props.login }} data-testid="login">
							Login
						</Link>
					</div>
				</Grid>
					

				<Grid item xs={12} md={2} >
					<div className="topnav-button">
						<Link to="/auth/signup" style={{color: props.signup}} data-testid="signup">
							Signup
						</Link>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default TopNav;
