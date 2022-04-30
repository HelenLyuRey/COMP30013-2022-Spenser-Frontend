import TopNav from "../components/common/TopNav";
import "./Feature.css"
import React from 'react'
import { makeStyles, Container, Grid } from "@material-ui/core";
import featureVoiceInput from "../images/feature-voice-input.png";
import featureVoiceResponse from "../images/feature-voice-response.png";
import featureTracker from "../images/feature-tracker.png"
import featureStats from "../images/feature-stats.png"


const useStyles = makeStyles(() => ({
	containerGrid: {
		width: "100%",
		// padding: '40px 0',
	}
}));

const Feature = () => {     
	const classes = useStyles();
    return (
		<div>
			<TopNav/>
			<div>
                <h1 className="featureTitle">
                    Your Expense Tracker as well as Your Companion
                </h1>
                <p className="featureSlogan">
                Spenser is a personalized companion voice assistant that is built specifically 
                for expense tracking by chatting with the user. 
                It will not only increase your financial capability, but also
                reduce stress by replying with some cheerful conversations. 
                </p>
                <div className="gridContainer">
                    
                        {/* <div className="grid">
                            <h3>01</h3>
                            <div className="gridContent">
                                <span></span>
                                <h3></h3>
                                <p></p>
                            </div>
                        </div> */}
                    <Container className={classes.containerGrid}>
                        <Grid container spacing={2} >

                            <Grid item xs={6}>
                                <Grid container spacing={2} >
                                    <Grid item xs={4}>
                                        <h1 className="featureNumber">01</h1>
                                    </Grid>
                                    <Grid item xs={8}>
                                    <div className="featureContent">
                                            <img className="featureImg" src={featureTracker} alt=""/>
                                            <h3>Expense Tracking</h3>
                                            <p>Save time on expense reports with everything 
                                                in one place. By tracking business expenses daily, 
                                                you can also control costs, 
                                                see what you're spending your money on and how much you're spending. 
                                                The entire process helps you become more financially aware.</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={6}>
                                <Grid container spacing={2} >
                                    <Grid item xs={4}>
                                        <h1 className="featureNumber">02</h1>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div className="featureContent">
                                            <img className="featureImg" src={featureStats} alt=""/>
                                            <h3>Statistic Display</h3>
                                            <p>Keep track of your monthly expense, income and balance
                                                for all spending and income categories.
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={6}>
                                <Grid container spacing={2} >
                                    <Grid item xs={4}>
                                        <h1 className="featureNumber">03</h1>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div className="featureContent">
                                            <img className="featureImg" src={featureVoiceInput} alt=""/>
                                            <h3>Voice Input</h3>
                                            <p>You can track you expenses by simply using your voice.
                                             It is simple to use wouldn't take much time and effort
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={6}>
                                <Grid container spacing={2} >
                                    <Grid item xs={4}>
                                        <h1 className="featureNumber">04</h1>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div className="featureContent">
                                            <img className="featureImg" src={featureVoiceResponse} alt=""/>
                                            <h3>Voice Response</h3>
                                            <p>You can to select different voices and personalities 
                                                for your voice agent and different dialogue 
                                                responses are triggered according to role 
                                                settings and expense scenarios.</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
		</div>
    );


}

export default Feature;