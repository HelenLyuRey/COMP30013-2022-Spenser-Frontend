**The University of Melbourne**
# COMP30022 - IT Project 

## Introduction

Welcome to team Algorithm Our Soul (AOS)! We are a group of energetic, diligent and creative students who wish to develop a wonderful personal CRM. Our CRM is called InfoLounge, a powerful app with several useful features including contact and event management, statistics display and so on. We wish you enjoy using our app and feel free to contact us through our email (infoloungeteam@gmail.com).

## Table of contents
* [Team Information](#team-information)
* [Usage](#usage)
* [Deployed Version](#deployed-version)
* [All features](#all-features)

## Team Information
### Team number and name
Team 001 - Algorithm Our Soul (AOS) 

### Team Members

| Name         | Student Number| Email                           | Roles
| :---         |     :---      | :---                            | :---
| Weilun Xu    | 1047837       | weilunx1@student.unimelb.edu.au | Full stack Developer & Technical Lead
| Kexin Lyu    | 1078428       | kllyu@student.unimelb.edu.au    | Frontend Developer & Scrum Master
| Kaijin Zhang | 1053843       | kaijinz@student.unimelb.edu.au  | Backend Developer & Database Manager
| Yuxuan Gu    | 1055323       | guyg2@student.unimelb.edu.au    | Frontend Developer & Design Master
| Xiaotian Tong| 1050138       | xiaotiant@student.unimelb.edu.au| Backend Developer & QA Tester

## Usage
In the project directory, you can run:
### `npm start`
*Reminder: You may need to run `npm i` beforehand to install required packages*

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Login details:

|Account        |Username                          |Password         |
| :-----        | -------                          | -----:          |
|Customer Login | kllyu@student.unimelb.edu.au     | 123456          |

(It will redirect to dashboard after entering the correct info and click login)

## Deployed Version

### Heroku URL
https://aos-infolounge.herokuapp.com/

#### Notes: 
- Connected to AOS backend https://aos-infolounge-back.herokuapp.com/
- An optimal window size is 1440 * 900

## All features
### ------------------------------------Before Login------------------------------------
### Home Page
- InfoLounge logo (Link to the home page)
- InfoLounge top navigation bar (Link to Feature, Developer team, Login and Sign up pages)
- Our slogan
### Feature
- List our main features
### Developer Team
- The information of all developers
### Login Page
- Enter email and password to login
- Use google account to login
- Email syntax checking
- Missing value checking
- Account status checking (whether the account is verified)
### Sign up Page
- Sign up by providing the first name, last name, email and password
- Send a verification email to the user for authentication
### Confirmation Page
- Appears after the user clicks the verify button attached to the email 
- Check the validity of the confirmation code and display the verification result
- Guide the user to login if successful
- Notify the user if unsuccessful

### ------------------------------------After Login------------------------------------
### Navigation bar (at the left)
- InfoLounge logo (Link to the dashboard page)
- Avatar of user (Link to the user profile page)
- Four buttons link to pages Dashboard, Connection List (No connection page), Calendar and Statistics
- Logout button (Redirect to the home page)
### User Profile
- A *Tags* button at top right to link to Tag Management page
- Displaying all the information of a user
- Allow user to update their information through the form
### Tag Management
- Display current tags
- Each name is linked to its own connection profile
- Each tag can be deleted which will also delete the corresponding tag in connection profile page
### Dashboard
- Greetings including date display
- Reminders block displaying all events that are going to be happening today
- Four statistics blocks displaying *Connections number*, *Number of today events*, *Number of finished tasks*, *Number of unfinished tasks*
- Todo list block allowing the user to add, edit, tick, export and delete their tasks
### No Connection Page
- Tell the user that he or she doesn't have any connection
- Guide the user to add his or her first connection
### Connection List
- An *Add Friend* button at top right to let user add new connections
- Show all connections in a table, features including searching, sorting, paging, filtering, grouping, exporting, selecting columns and deletion
- Link to detailed connection profile by clicking on each row of the table
### Add Connection Page
- A form that can be used to add a new connection
### Detailed Connection Profile
- Each name in the connection list are connect to that specific connection profile
- It displays specific user’s detailed information
- Functionalities 
    - Edit general information such as name, date of birthday, first met date, age, gender
    - Add an existing tag
    - Add a new tag/ or delete that new tag
### Calendar
- Display all events once clicked the calendar icon on the nav bar
- When click on single event:
    - Display specific event detail
    - Edit this event (time and title)
    - Delete this event
    - Add event
    - Add personal event: time and title
    - Add connection event: time, title and with-who
### Statistics
- Gender Distribution
- Tag Distribution
- Reminder Number in this Week
- Top 3 Frequent Connections
