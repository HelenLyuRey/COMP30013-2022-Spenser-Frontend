import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import MsgComponent from './components/tracker/MsgComponent.vue'
import {applyVueInReact} from 'veaury'

const Basic = applyVueInReact(MsgComponent)

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <Main/> */}
		<Basic message={'Hello from Vue'}/>
	</React.StrictMode>,
	document.getElementById("root")
);
