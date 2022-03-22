import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage"
import "./App.css";

/***********************************/
// About and Home pages are for testing only and will combine with Paddi's code later

function App() {

	let routes;
	routes = (
			<React.Fragment>
				<Route exact path="/" component={Homepage} />
			</React.Fragment>
		);

	return (
		<Router>
			<Switch>			
				<main>{routes}</main>
			</Switch>
		</Router>
	);
}

export default App;
