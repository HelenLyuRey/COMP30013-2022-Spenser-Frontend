import React, { useState, useEffect, useContext} from 'react';
import { makeStyles, Container, Grid } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import LoggedInNav from "../components/common/LoggedInNav";
import './Dashboard.css'
import CategoryDistribution from "../components/dashboard/CategoryDistribution";
import MonthlyDistribution from "../components/dashboard/MonthlyDistribution";
import MonthlyBalance from "../components/dashboard/MonthlyBalance";
import CategoryAccordions from '../components/dashboard/CategoryAccordion';
import conn from '../util/conn';
import AuthContext from "../context/auth-context";
// import manualBackground from "../images/manual-background.png"

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
    const [wantedMonth, setWantedMonth] =  useState(month_name);

    useEffect(() => {
		conn.get(`/user/profile/${auth.userID}`)
			.then((user) => {
                setUserInfo(user.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [userInfo, auth.userID]);

    async function searchMonthlyInfo(e) {
        e.preventDefault();
        let month = document.getElementById("searchMonth").value;
        await
        conn
        .post(`/expense/calculateUserIncomeExpense/${auth.userID}`,
        {
            month: month // Only display the current month
        })
        .then(() => {
            console.log(`user expense summary updated for ${month}`)
            setWantedMonth(month)
        })
        .catch((err) => {
        console.log(err);
        });
    }
    return (
        <div>
            <div className="background"></div>
            <LoggedInNav/>
            <div className='dashboardMain'>
                <div className='search-container'>
                    <form>
                        <input type="text" placeholder="Input month to search" id="searchMonth"/>
                        <button onClick={searchMonthlyInfo}>
                            Search
                        </button>
                    </form>
                </div>
                <Container className={classes.containerGrid}>
                    <Grid container spacing={2} >
                        <Grid item xs={3}>
                            <Card>
                                <h1>{wantedMonth}</h1>
                                <p>Month</p>
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
                                    category = {userInfo.current_month_category_expense}
                                    title_text = {"Expense and Income Distribution"}
                                    // series_name = {"Category"}
                                    />
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card>
                                <CategoryAccordions
                                    categories = {userInfo.current_month_description_expense}/>
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
