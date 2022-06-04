import React, { useState, useEffect, useContext} from 'react';
import { makeStyles, Container, Grid } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import LoggedInNav from "../components/common/LoggedInNav";
import './Dashboard.css'
import CategoryDistribution from "../components/dashboard/CategoryDistribution";
import MonthlyDistribution from "../components/dashboard/MonthlyDistribution";
import MonthlyBalance from "../components/dashboard/MonthlyBalance";
import SpendingAccordions from '../components/dashboard/SpendingAccordion';
import IncomeAccordions from '../components/dashboard/IncomeAccordion';
import conn from '../util/conn';
import AuthContext from "../context/auth-context";
import YearMonthPicker from '../components/common/YearMonthPicker';
import SearchIcon from '@mui/icons-material/Search';
// import manualBackground from "../images/manual-background.png"

import { CircleLoading } from "react-loadingg";

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
    const [loading, setLoading] = useState(true);

    function fullMonthName(partial_month){
        const month_full = ["January","February","March","April","May",
        "June","July","August","September","October","November","December"];
        const month_part = ["Jan","Feb","Mar","Apr","May",
                "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

        let result
        month_part.forEach((month, count)=>{
            if(month === partial_month){
                result = userInfo.year + " " + month_full[count]
            }
        })
        return result
    }

    useEffect(() => {
		conn.get(`/user/profile/${auth.userID}`)
			.then((user) => {
                setUserInfo(user.data);
                setLoading(false)
			})
			.catch((e) => {
				console.log(e);
                setLoading(false)
			});
	}, [userInfo, auth.userID]);

    async function searchMonthlyInfo(e) {
        e.preventDefault();
        let dateTime = sessionStorage.getItem("YearMonth").split(" ");
        let month = dateTime[1] // in word
        let year = dateTime[3] // in num in string format
        // console.log(typeof month)
        // console.log(typeof year)
        sessionStorage.setItem("loading", "true");
        await
        conn
        .post(`/expense/calculateUserIncomeExpense/${auth.userID}`,
        {
            month: month, // Only display the current month
            year: year
        })
        .then(() => {
            console.log(`user expense summary updated for ${year} ${month}`)
            sessionStorage.setItem("loading", "false");
        })
        .catch((err) => {
            console.log(err);
            sessionStorage.setItem("loading", "false");
        });

        await
		conn
		.post(`/expense/calculateMonthlyExpenseIncomeBalance/${auth.userID}`,
        {
            year: year // Only display current year
        })
		.then(() => {
			console.log(`user monthly expense summary updated for ${year}`)
		})
		.catch((err) => {
		  console.log(err);
		});
        
    }

    if (sessionStorage.getItem("loading") === "true" || loading) {
		return (
        <div>
            <LoggedInNav/>
            <CircleLoading />
        </div>
        );
	}

    return (
        <div>
            <div className="background"></div>
            <LoggedInNav/>
            <div className='dashboardMain'>
                <div className='search-container'>
                    <YearMonthPicker/>
                    <div className='search-icon'>
                        <SearchIcon 
                            fontSize="large"
                            color="action"
                            onClick={searchMonthlyInfo}/>
                    </div>
                    
                </div>
                <Container className={classes.containerGrid}>
                    <Grid container spacing={2} >
                        <Grid item xs={3}>
                            <Card>
                                <h1>{fullMonthName(userInfo.month)}</h1>
                                <p>Date</p>
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
                                    - ${userInfo.current_month_total_expense}
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
                                    title_text = {"Spending Distribution"}
                                    // series_name = {"Category"}
                                    />
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card>
                                <SpendingAccordions
                                    categories = {userInfo.current_month_description_expense}/>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card>
                                <IncomeAccordions
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
