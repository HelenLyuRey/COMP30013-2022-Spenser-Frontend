import React from "react";
import "./Home.css";
import LoggedInNav from "../components/common/LoggedInNav"


const Profile = () => {
	return (
		<div>
			<LoggedInNav/>
			<p>Simple profile page</p>
		</div>
	);
};

export default Profile;
