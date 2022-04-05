import { useState } from 'react';
import { makeStyles, Container, Grid } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import LoggedInNav from "../components/common/LoggedInNav"
import './Dashboard.css'
import EntityDistribution from "../components/dashboard/EntityDistribution"
import MonthlyDistribution from "../components/dashboard/MonthlyDistribution"
import MonthlyBalance from "../components/dashboard/MonthlyBalance"

const useStyles = makeStyles(() => ({
	containerGrid: {
		marginLeft: "5%",
		width: "100%",
		// padding: '40px 0',
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		// marginLeft: '5%',
		// marginRight: '5%',
		boxShadow: " 3px 3px 3px #b8b6b6",
		background: "rgba(246, 246, 246, 1)",
	},
}));

const Dashboard = () => {    

    const classes = useStyles();

    return (
        <div>
            <div className="background"></div>
            <LoggedInNav/>
            <div className='dashboardMain'>
                <Container className={classes.containerGrid}>
                    <Grid container spacing={2} >
                        <Grid item xs={3}>
                            <Card>
                                <h1 style={{color:"rgb(2, 136, 92)"}}>$4000</h1>
                                <p>Income</p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card>
                                <h1 style={{color:"rgb(161, 38, 38)"}}>$2500</h1>
                                <p>Expense</p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card>
                                <h1>$1500</h1>
                                <p>Balance</p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card>
                                <h1>Food</h1>
                                <p>Biggest spending category</p>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card>
                                <EntityDistribution/>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card>
                                <MonthlyDistribution/>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card>
                                <MonthlyBalance/>
                            </Card>
                        </Grid>
                    </Grid>
                    
                </Container>
            </div>
        </div>
    );

}

export default Dashboard;
