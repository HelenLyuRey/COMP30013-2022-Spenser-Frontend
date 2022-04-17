import React from "react";
import ReactDOM from "react-dom";
import SpenserApp from "./SpenserApp";

import App from './App.vue'
import MsgComponent from './components/tracker/MsgComponent.vue'

import {applyVueInReact} from 'veaury'
const Tracker = applyVueInReact(MsgComponent)

ReactDOM.render(
	<React.StrictMode>
		<SpenserApp />

		{/* <Tracker message="Hi"/> */}
		{/* <Tracker/> */}

	</React.StrictMode>,
	document.getElementById("root")
);
