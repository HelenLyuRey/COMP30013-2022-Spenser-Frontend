import React, { useState, useEffect, useContext} from 'react';
import { makeStyles, Container, Grid } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import LoggedInNav from "../components/common/LoggedInNav";
import './Dashboard.css'
import CategoryDistribution from "../components/dashboard/CategoryDistribution";
import MonthlyDistribution from "../components/dashboard/MonthlyDistribution";
import MonthlyBalance from "../components/dashboard/MonthlyBalance";
import EntityAccordions from '../components/dashboard/EntityAccordion';
import conn from '../util/conn';
import AuthContext from "../context/auth-context";

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
    const [userInfo, setUserInfo] = useState("");
    const auth = useContext(AuthContext);

    // Get current month
    const month = ["January","February","March","April","May",
				"June","July","August","September","October","November","December"];
	const d = new Date();
	let month_name = month[d.getMonth()];

    const zero = 0

    useEffect(() => {
		conn.get(`/user/profile/${auth.userID}`)
			.then((user) => {
				setUserInfo(user.data);
				// console.log(user.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [userInfo, auth.userID]);

    return (
        <div>
            <div className="background"></div>
            <LoggedInNav/>
            <div className='dashboardMain'>
                <Container className={classes.containerGrid}>
                    <Grid container spacing={2} >
                        <Grid item xs={3}>
                            <Card>
                                <h1>{month_name}</h1>
                                <p>Current Month</p>
                            </Card>
                        </Grid>

                        <Grid item xs={3}>
                            <Card>
                                <h1 style={{color:"rgb(2, 136, 92)"}}>
                                    ${userInfo.current_month_total_income}
                                </h1>
                                <p>Income</p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card>
                                <h1 style={{color:"rgb(161, 38, 38)"}}>
                                    ${userInfo.current_month_total_expense}
                                </h1>
                                <p>Expense</p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card>
                                <h1>${userInfo.current_month_balance}</h1>
                                <p>Balance</p>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card>
                                <CategoryDistribution
                                    category = {userInfo.current_month_category_expense}/>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card>
                                <EntityAccordions
                                    entities = {userInfo.current_month_entity_expense}/>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card>
                                <MonthlyDistribution
                                    monthly_income = {userInfo.monthly_income}
                                    monthly_expense = {userInfo.monthly_expense}/>
                            </Card>
                        </Grid>

                        <Grid item xs={6}>
                            <Card>
                                <MonthlyBalance
                                    monthly_balance = {userInfo.monthly_balance}/>
                            </Card>
                        </Grid>
                    </Grid> 
                    
                </Container>
            </div>
        </div>
    );

}

export default Dashboard;
