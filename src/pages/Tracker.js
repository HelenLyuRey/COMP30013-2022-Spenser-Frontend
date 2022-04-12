import LoggedInNav from "../components/common/LoggedInNav"
import App from '../components/tracker/App.vue'

import MsgComponent from '../components/tracker/MsgComponent.vue'

import {applyVueInReact} from 'veaury'


const Tracker = () => {     

	const Tracker = applyVueInReact(MsgComponent)
   
    return (
		<div>
			<LoggedInNav/>
			<Tracker message={"Hi there"}/>
			{/* <Basic message={'Hello from Vue'}/> */}
			{/* <div style={{
					position: "absolute",
					top: "30vh",
					right: "0",
					left: "0",
					color: "black",
					fontSize: "150%",
					textAlign: "center"
			}}>This is the Tracker page, will add on this later</div> */}
		</div>
    );

}

export default Tracker;