# Usage and installation 
There are two projects created for the front-end:
- `SpenserReactApp`: The basic Spenser authentication and statistics display 
    - Written in `React`
    - Hosted in: [http://localhost:3000](http://localhost:3000)
- `TrackerVueApp`: Voice input and output expense tracker. The Dialogflow gateway user interface which I modified on top of [dialogflow-web-v2](https://github.com/mishushakov/dialogflow-web-v2)   
    - Written in `Vue`
    - Hosted in: [http://localhost:4000](http://localhost:4000)
`Webpack` configuration is used to use React project and Vue project interactively in one application.

You need to have 2 terminals open and cd into each directiory accordingly.
In each project directory, you can run:
### `npm start`
*Reminder: You may need to run `npm i` beforehand to install required packages*

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Requirenment 
To use the 4 agents, you need to use Microsoft Edge browser and have Microsoft voice packages downloaded locally. The voices are from Microsoft Azure, currently is not free to use so I didn't use their cloud. \
You can learn how to install voices in Windows 10 [here](https://support.microsoft.com/en-us/topic/download-voices-for-immersive-reader-read-mode-and-read-aloud-4c83a8d8-7486-42f7-8e46-2b0fdf753130)\
If you don't have the voices, you still can use the voice input expense tracker, just without the voice reponse (the text response is still avaliable). 

<!-- ## Deployed Version

### Heroku URL
https://aos-infolounge.herokuapp.com/

#### Notes: 
- Connected to AOS backend https://aos-infolounge-back.herokuapp.com/ -->

# Main features
### ------------------------------------Before Login------------------------------------
### User Guide
- Explain how to use the voice tracker
- List out the spending and income categories  

### Tracker 
- Use voice input or type your spending
    - Click on the microphone to start or stop recording
    - You need to follow the format `I spent x dollars on x` for `spending` or `I earned x dollars on x` for `income`
    - You can only list one product + expense per time (for example, if you say "I spent x dollars on x and x dollars on x", only the first part will be recorded)
    - Please see the `User Guide` in Spenser or check out the [demo](https://www.youtube.com/watch?v=0FBSrelCGcc) to learn more
- Get voice response
    - Click on the speaker to turn on or off the agent voice response
    - You need to locally download the voice packages
    
### Dashboard
- You can search for year/month expense
- This page will display:
    - Date/ month's spending/ month's income/ month's balance
    - Spending distribution
    - Detailed spending distribution (breakdown each category)
    - Income distribution 
    - Yearly income/ spending/ balance plot of all month to show overall trend

### Profile
- Change user name
- Change password
- Change voice agent