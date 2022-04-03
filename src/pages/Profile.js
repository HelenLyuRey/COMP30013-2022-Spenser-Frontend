import LoggedInNav from "../components/common/LoggedInNav"


const Profile = () => {        
   
    return (
		<div>
			<LoggedInNav/>
			<div style={{
					position: "absolute",
					top: "30vh",
					right: "0",
					left: "0",
					color: "black",
					fontSize: "150%",
					textAlign: "center"
			}}>This is the Profile page, will add on this later</div>
		</div>
    );

}

export default Profile;