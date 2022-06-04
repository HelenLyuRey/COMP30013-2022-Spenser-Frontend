import "./LoggedInNav.css";
import { Link } from "react-router-dom";

import React, {useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useHistory } from "react-router-dom";
import conn from '../../util/conn';


const LoggedInNav = () => {
    const auth = useContext(AuthContext);
    let history = useHistory();

	const month = ["Jan","Feb","Mar","Apr","May",
					"Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	const d = new Date();
	let month_name = month[d.getMonth()];
	let year_name = d.getFullYear().toString()

	function logoutHandler() {
		auth.onLogout();
		// console.log("in?")
		history.push("/");
	}

	async function currentMonthCalculate() {
		// console.log(typeof month_name)
		// console.log(typeof year_name)
		sessionStorage.setItem("loading", "true");
        await
        conn
        .post(`/expense/calculateUserIncomeExpense/${auth.userID}`,
        {
            month: month_name, // Only display the current month
			year: year_name
        })
        .then(() => {
            console.log(`Dashboard calculate current year (${year_name}), 
						current month's (${month_name}) data`)
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
			year: year_name
		})
		.then(() => {
			console.log(`user monthly expense summary updated for ${year_name}`)
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
