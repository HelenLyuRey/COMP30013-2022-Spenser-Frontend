import Wave from "wave-visualizer";

export default class VoiceVisualizer{

    constructor(){
    }

    async openAudioStream(){
        try{
            this.audioStream = await navigator.mediaDevices.getUserMedia({ audio: true })
        } catch (err){
            console.error( "Cannot get the audio stream ", err)
        }
    }

    async startVisualization(){
        await this.openAudioStream();
        // console.log(this.audioStream);
        let wave = new Wave();
        wave.fromStream(this.audioStream, "output", {
            type: "bars",
            colors: ["white", "white"],
            stroke: 1,
        });
    }

    async stopVisualization(){
        console.log(this.audioStream);
        this.audioStream.getTracks().forEach((track) => {
            track.stop();
        });
    }
        
}