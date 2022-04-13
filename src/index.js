import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import App from './components/tracker/App.vue'
// import MsgComponent from '../components/tracker/MsgComponent.vue'


ReactDOM.render(
	<React.StrictMode>
		<App />
		{/* <Main/> */}
		{/* <div>
			Can you see?
		</div>
		 */}
	</React.StrictMode>,
	document.getElementById("root")
);
