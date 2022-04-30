import React from 'react';
import "./TopNav.css";
import { Link } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";
import spenserLogo from "../../images/Spenser-logo.png"

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
			<div className="mobileIcon">

			</div>
			
			<Grid container spacing={5} className={classes.containerNavbar}>
				<Grid item xs={12} md={4} className={classes.containerLogo}>
					<img className='spenserLogo' src={spenserLogo} alt=""/>
				</Grid>

				<Grid item xs={12} md={2}>
					<Link className="topnav-button" to="/">
						Home
					</Link>
				</Grid>

				<Grid item xs={12} md={2}>			
					<Link  className="topnav-button" to="/feature">
						Features
					</Link>
				</Grid>


				<Grid item xs={12} md={2} >
					<Link className="topnav-button"  to="/auth/login" data-testid="login">
						Login
					</Link>
				</Grid>
					

				<Grid item xs={12} md={2} >
					<Link className="topnav-button" to="/auth/signup" data-testid="signup">
						Signup
					</Link>
				</Grid>
			</Grid>
		</div>
	);
};

export default TopNav;