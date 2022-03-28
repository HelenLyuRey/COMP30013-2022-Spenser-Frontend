import React from "react";
import "./Home.css";
import TopNav from "../components/common/TopNav";

import ParticlesBg from "particles-bg";

const Home = () => {
	return (
		<div>
			<ParticlesBg type="square" bg={true} />
			{/* <div class="bg-image"></div> */}
			{/* <MouseParticles g={3}  radius={7} color="random" cull="col,image-wrapper"/> */}
			<TopNav
				emoj="( ๑‾̀◡‾́)σ"
				home="rgb(109, 109, 109)"
				login="rgb(109, 109, 109)"
				signup="rgb(109, 109, 109)"
			/>
			<div className="slogan">
				<p className="organise">Spenser</p>
			</div>
			<div className="explanation">
				<p>A personalised voice assistant expense tracker</p>
				<p>Makes your life easier</p>
			</div>
		</div>
	);
};

export default Home;
