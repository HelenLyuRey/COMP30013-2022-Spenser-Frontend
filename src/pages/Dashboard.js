import { useState } from 'react';
import LoggedInNav from "../components/common/LoggedInNav"
import './Dashboard.css'


const Dashboard = () => {        
   
    return (
        <div>
            {/* <div class="background"></div> */}
            <LoggedInNav/>
            <div class="top-container">
                <div class="title" >Welcome to Spenser</div>
                {/* <button id="start-btn" class="simple-btn" onClick={clickStart}>{buttonText}</button> */}
            </div>

        </div>
    );

}

export default Dashboard;
