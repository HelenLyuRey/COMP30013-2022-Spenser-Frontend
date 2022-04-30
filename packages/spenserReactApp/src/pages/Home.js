import React from "react";
import "./Home.css";
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
        <p className="home-slogan">
            Record All Your Expense Only Using Your Voice
        </p>
        <div className="home-purple-boxline"></div>
        <div className="home-features">
          <p>IMPROVE PRODUCTIVTY</p>
          <p>INCREASE FINANCIAL AWARENESS</p>
          <p>CONVENIENT</p>
          <p>EASY</p>         
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
