import Home from "./pages/Home"
import FormLogInPage from "./pages/FormLogInPage";
import FormSignUpPage from "./pages/FormSignUpPage";
import AuthContext from "./context/auth-context";
import Dashboard from "./pages/Dashboard";
// import Tracker from "./pages/Tracker";
import Profile from "./pages/Profile";
import Feature from "./pages/Feature"
import UserManual from "./pages/UserManual";
import LoginToUseMessage from "./components/common/LoginToUseMessage"
// import Confirm from "./pages/Confirm";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";

import TrackerVueApp from './components/tracker/TrackerVueApp';



/***********************************/

function App({ history }) {
	const [userID, setUserID] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [voice, setVoice] = useState("")


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
				<Route exact path="/manual" component={UserManual} />
				<Route exact path="/tracker" component={TrackerVueApp} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/profile" component={Profile} />
			</React.Fragment>

		);
	} else if (!isLoggedIn) {
		routes = (
			<React.Fragment>
				<Route exact path="/" component={Home} />
				<Route exact path="/auth/signup" component={FormSignUpPage} />
				<Route exact path="/auth/login" component={FormLogInPage} />
				<Route exact path="/feature" component={Feature} />

				<Route exact path="/manual" component={LoginToUseMessage} />
				<Route exact path="/tracker" component={LoginToUseMessage} />
				<Route exact path="/dashboard" component={LoginToUseMessage} />
				<Route exact path="/profile" component={LoginToUseMessage} />

			</React.Fragment>
		);
	}

	return (
		<Router history={history}>
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
