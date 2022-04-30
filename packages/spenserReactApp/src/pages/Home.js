import React from "react";
import "./Home.css";
import { Grid } from '@mui/material';
import TopNav from "../components/common/TopNav";
import greyBackground from "../images/grey-background.jpg"
import rightBackground from "../images/home-right.png"

const Home = () => {
	return (
	<div>

    <TopNav/>

    <img className="img-left" src={greyBackground} alt=""/>
    <div className="home-body home-left">
        <h2>Spenser</h2>
        <p className="home-slogan">A voice based expense tracker just for you</p>
        <div className="home-purple-boxline"></div>
        <div className="home-features">
          <p>EXPENSE TRACKING</p>
          <p>VOICE INPUT</p>
          <p>VOICE RESPONSE </p>
          <p>STATISTICS</p>          
        </div>
    </div>

    <img className="img-right" src={rightBackground} alt=""/>
    <div className="home-body home-right" >
        <div>
        </div>
    </div>

	</div>
	);
};

export default Home;
