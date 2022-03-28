import VoiceVisualizer from "../voiceVisualizer.js";
import { useState } from 'react';
import './Dashboard.css'


const Dashboard = () => {

    const [buttonText, setButtonText] = useState("Start Spenser"); 
    const [isStarted, setIsStarted] =  useState(false);

    const voiceVisualizer = new VoiceVisualizer();
   
    const clickStart = async () => {
        console.log(isStarted)
         if(!isStarted){
            // start assistant
            setButtonText("Starting...")
            await voiceVisualizer.startVisualization();
            setIsStarted(true);
            setButtonText("Stop Spenser");
        } else{
            // console.log("before stop", this.audioStream);
            // stop assistant
            setButtonText("Stopping...");
            voiceVisualizer.stopVisualization();
            setIsStarted(false);
            setButtonText("Start Spenser");
        }
    }
        
   
    return (
        <div>
            {/* <div class="background"></div> */}

            <div class="top-container">
                <div class="title" >Welcome to Spenser</div>
                {/* <button id="start-btn" class="simple-btn" onClick={clickStart}>{buttonText}</button> */}
            </div>

        </div>
    );

}

export default Dashboard;
