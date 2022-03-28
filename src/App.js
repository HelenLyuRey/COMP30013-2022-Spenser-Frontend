import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home"
import FormLogInPage from "./pages/FormLogInPage";
import FormSignUpPage from "./pages/FormSignUpPage";
import AuthContext from "./context/auth-context";
// import Confirm from "./pages/Confirm";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";



/***********************************/

function App() {
	const [userID, setUserID] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);


	let routes;
	const logoutHandler = useCallback(() => {
		setIsLoggedIn(false);
		setUserID(0);
		sessionStorage.setItem("userID", "");
		console.log("here");
	}, []);

	//	set new token when logged in
	const loginHandler = useCallback((currUserID) => {
		setUserID(currUserID);

		sessionStorage.setItem("userID", currUserID);
		setIsLoggedIn(true);
	}, []);

	useEffect(() => {
		setUserID(sessionStorage.getItem("userID"));
		setIsLoggedIn(!!sessionStorage.getItem("userID"));
	}, [setIsLoggedIn]);
	console.log("auth...", isLoggedIn);

	if (isLoggedIn) {
		routes = (
			<React.Fragment>
				<Route exact path="/dashboard" component={Dashboard} />

				{/* if logged in, the user will be directed to enter the business location */}
				{/* <Redirect to="/dashboard" /> */}
			</React.Fragment>
		);
	} else if (!isLoggedIn) {
		routes = (
			<React.Fragment>
				<Route exact path="/" component={Home} />
				<Route exact path="/auth/signup" component={FormSignUpPage} />
				<Route exact path="/auth/login" component={FormLogInPage} />
				{/* <Route
					exact
					path="/confirm/:userId/:confirmationCode"
					component={Confirm}
				/> */}

				{/* if logout or want to access the page that login is needed, the user will be directed to the login page */}
				{/* <Redirect to="/" /> */}
			</React.Fragment>
		);
	}

	return (
		<Router>
			<Switch>
				<AuthContext.Provider
					value={{
						userID: userID,
						isLoggedIn: isLoggedIn,
						onLogout: logoutHandler,
						onLogin: loginHandler,
					}}
				>
					<main>{routes}</main>
				</AuthContext.Provider>
			</Switch>
		</Router>
	);
}

export default App;
