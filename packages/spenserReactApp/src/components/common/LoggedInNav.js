import "./LoggedInNav.css";
import { Link } from "react-router-dom";

import React, {useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useHistory } from "react-router-dom";
import conn from '../../util/conn';


const LoggedInNav = () => {
    const auth = useContext(AuthContext);
    let history = useHistory();

	const month = ["January","February","March","April","May",
                "June","July","August","September","October","November","December"];
	const d = new Date();
	let month_name = month[d.getMonth()];

	function logoutHandler() {
		auth.onLogout();
		// console.log("in?")
		history.push("/");
	}

	async function currentMonthCalculate() {
		console.log(month_name)
        await
        conn
        .post(`/expense/calculateUserIncomeExpense/${auth.userID}`,
        {
            month: month_name // Only display the current month
        })
        .then(() => {
            console.log(`Dashboard calculate current month's data`)
        })
        .catch((err) => {
        console.log(err);
        });

		await
		conn
		.post(`/expense/calculateMonthlyExpenseIncomeBalance/${this.userId}`,{})
		.then(() => {
			console.log("user monthly expense summary updated")
		})
		.catch((err) => {
		  console.log(err);
		});
    }

	async function getVoice(){
		await conn.get(`/user/profile/${auth.userID}`)
        .then((user) => {
            sessionStorage.setItem("voiceName", user.data.agent_voice);
			location.reload() // Need to repload otherwise the voice doesn't change
        })
        .catch((e) => {
            console.log(e);
        });
	}

	return (
		<>
		
		<div className="sidenav">
			<div className="sidenavtitle">
				Welcome!
			</div>

			<Link className="sidebaritem" to="/manual">
					Manual
			</Link>

			<Link className="sidebaritem" to="/tracker" onClick={getVoice}>
					Tracker
			</Link>

			<Link className="sidebaritem" to="/dashboard" onClick={currentMonthCalculate}>
				Dashboard
			</Link>
		
			<Link className="sidebaritem" to="/profile">
				Profile
			</Link>

			<Link className="sidebaritem" to="/" onClick={logoutHandler}>
				Logout
			</Link>

		</div>
		</>
	);
};

export default LoggedInNav;
