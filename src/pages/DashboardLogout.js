import VoiceVisualizer from "../voiceVisualizer.js";
import { useState } from 'react';
import LoggedInNav from "../components/common/LoggedInNav"
import './Dashboard.css'


const DashboardLogout = () => {        
   
    return (
        <div>
            {/* <div class="background"></div> */}
            <div class="top-container">
                <div class="title" >Please login to track your expenses</div>
                {/* <button id="start-btn" class="simple-btn" onClick={clickStart}>{buttonText}</button> */}
            </div>

        </div>
    );

}

export default DashboardLogout;
