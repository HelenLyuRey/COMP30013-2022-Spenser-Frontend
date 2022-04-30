import TopNav from "../components/common/TopNav";
import "./Feature.css"
import React from 'react'
import { makeStyles, Container, Grid } from "@material-ui/core";
import featureVoiceInput from "../images/featureVoiceInput.png"

const useStyles = makeStyles(() => ({
	containerGrid: {
		marginLeft: "5%",
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
                    We believe in customer satisfaction
                </h1>
                <p className="featureSlogan">
                    Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat.
                </p>
                <div className="gridContainer">
                    
                        {/* <div className="grid">
                            <h3>01</h3>
                            <div className="gridContent">
                                <span></span>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div> */}
                    <Container className={classes.containerGrid}>
                        <Grid container spacing={2} >
                            <Grid item xs={3}>
                               <h1>01</h1>
                               <img src={featureVoiceInput} alt=""/>
                               <p>Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat.Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat.Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat.</p>
                            </Grid>

                            <Grid item xs={3}>
                                <h1>02</h1>
                            </Grid>

                            <Grid item xs={3}>
                                <h1>03</h1>
                            </Grid>

                            <Grid item xs={3}>
                                <h1>04</h1>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
		</div>
    );


}

export default Feature;