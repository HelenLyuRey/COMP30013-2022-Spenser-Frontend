import LoggedInNav from "../components/common/LoggedInNav"
import React from 'react'
import manualBackground from "../images/manual-background.png"
import "./UserManual.css"
import { makeStyles, Container, Grid } from "@material-ui/core";
import CategoryCarousel from "../components/manual/CategoryCarousel";
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
	containerGrid: {
		width: "100%",
        marginLeft: "17%",
        marginTop: "4%"
	}
}));

const UserManual = () => {     
	const classes = useStyles();
    return (
		<div className="manual-container">
			<LoggedInNav/>
            {/* <div className="manual-bg-img"></div> */}
            <img className="manual-bg-img" src={manualBackground} alt=""/>

            <div className="manual-content">
            <Container className={classes.containerGrid}>
                <Grid container spacing={8} >
                    <Grid item xs={6}>
                        <h1>How to use?</h1>
                        <p>​You can record your expenses by simply saying the amount you
                             spent and where you spend it on. 
                             Be aware that what you say have to be in our 
                             <span style={{fontWeight:"bold"}}> expense category list</span>
                             .
                             
                             <p>You could say something in the format of:</p>
                             <ul>
                                 <li>I spent $50 on a t-shirt</li>
                                 <li>Cat food cost me 40 dollars</li>
                                 <li>I earned $3000 on investment</li>
                                 <li>My salary is $6000</li>
                             </ul>
                             
                             You can find out more about our
                             <span style={{fontWeight:"bold"}}> expense category list </span> 
                             by exploring the slider on the right!</p>

                             <Link className="start-now-btn" to="/tracker">
                                    Start Now!
                            </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <CategoryCarousel/>
                    </Grid>
                </Grid>
            </Container>
            </div>
		</div>
    );


}

export default UserManual;