import LoggedInNav from "../components/common/LoggedInNav"
import React from 'react'
import manualBackground from "../images/manual-background.png"
import "./UserManual.css"
import { Avatar, makeStyles, Container, Grid } from "@material-ui/core";
import CategoryCarousel from "../components/manual/CategoryCarousel";
import { Link } from "react-router-dom";
import Emily from "../images/agent_emily.jpg"
import Guy from "../images/agent_guy.jpg"
import Aria from "../images/agent_aria.jpg"
import Jenny from "../images/agent_jenny.jpg"
// import { Avatar, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
	containerGrid: {
		width: "100%",
        marginLeft: "17%",
        marginTop: "4%"
	},
    avatar: {
        width: "150px",
        height: "150px",
        marginLeft: "20%",
        border: '5px solid #AB62FE'
    },
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
                        <p>You can record your expenses by simply saying the amount you
                             spent and where you spend it on. 
                             Be aware that what you say have to be in our 
                             <span style={{fontWeight:"bold"}}> expense category list</span>
                             .
                             <p>You can list out the detailed spending/ income as well. For example, 
                                 pants inside the clothing category</p>

                            <p>Your sentence has to include 3 things: </p>
                            <ul>
                                 <li>State whether it is spending or income</li>
                                 <li>State the expense amount</li>
                                 <li>State the expense product</li>
                             </ul>

                             <p>See the examples below:</p>
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

                    <Grid item xs={12}>
                        <h1>Getting to Know Our Voice Agent</h1>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="agent-container">
                            <br/>
                            <Avatar 
                                src={Emily}
                                className={classes.avatar} />
                            <h3>Emily</h3>
                            <h4>Relaxed Agent</h4>
                            <p>Emily has a relaxed voice, 
                                which sounds very chill and pleasant. 
                                You may choose to use this agent if you
                                 had a busy day at work and just would like
                                  to turn on your relaxed mood.</p>
                            <br/>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className="agent-container">
                            <br/>
                            <Avatar 
                            src={Guy}
                            className={classes.avatar} />
                            <h3>Guy</h3>
                            <h4>Excited Agent</h4>
                            <p>Guy has a casual conversational tone 
                                while at eye level with the user. He is fun 
                                being a friend and lightens the mood with his wittiness.</p>
                            <br/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="agent-container">
                        <br/>
                        <Avatar 
                            src={Aria}
                            className={classes.avatar} />
                            <h3>Aria</h3>
                            <h4>Assertive Agent</h4>
                            <p>Aria has an assertive voice, 
                                which is sharper than others, direct and clear. 
                                You may want to choose this agent when you want 
                                to get things done.</p>
                            <br/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="agent-container">
                            <br/>
                            <Avatar 
                            src={Jenny}
                            className={classes.avatar} />
                            <h3>Jenny</h3>
                            <h4>Caring Agent</h4>
                            <p>Jenny has a caring voice, 
                                which make you feel like you are 
                                talking to someone like your mom or aunt who
                                cares deeply about the your well-being and 
                                takes things serious</p>
                            <br/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            </div>
		</div>
    );


}

export default UserManual;