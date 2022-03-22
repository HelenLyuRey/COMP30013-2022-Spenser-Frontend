// Doesn't work for index.js to include Homepage.js, maybe fix it later, just keep it like this now


import VoiceVisualizer from "./voiceVisualizer.js";
import { useState } from 'react';
import './Homepage.css'

// const Test = () => {
//     return <p>Just testing</p>
// }
// export default Test;

const Homepage = () => {

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
            <div class="background"></div>

            <div class="top-container">
                <div class="title" >Spenser is here</div>
                <button id="start-btn" class="simple-btn" onClick={clickStart}>{buttonText}</button>
            </div>

            <div class="visualization-container" >
                <canvas class="try" id="output" width="250" height="200" ></canvas>
                <div class="try">can you see?</div>
            </div>
        </div>
    );

}

export default Homepage;
