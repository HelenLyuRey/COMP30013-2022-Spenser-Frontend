import { makeStyles, Container, Grid } from "@material-ui/core";

import LoggedInNav from "../components/common/LoggedInNav"
import TopProfileAvatar from "../components/profile/PersonalAvatar";
import './Profile.css'

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "left",
		padding: "20px",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const Profile = () => {        

	const classes = useStyles();

	const agentVoice = [
		// gonna change it later when get from the database
		"Female-Russian",
		"Male - American",
		"Female - British"
	];

	const agentPersonality = [
		"Friend",
		"Aunt",
		"Butler",
		"Admirer"
	]
   
    return (
		<div>
			<div className="background"></div>
			<LoggedInNav/>


			<div className='dashboardMain'>


				<h1>
					<span>
						{/* {" "}
						{connection.firstname +
							" " +
							connection.lastname}{" "} */}
						Hello, Lucy
					</span>
					{/* : "loading"} */}
				</h1>

				

			<form className="form-profile" 
				// onSubmit={handleSubmit}
			>
				<div className="avatar">
					<TopProfileAvatar/>
				</div>
				
				<div className="profile-container">
					<div class="field">
						<div class="field_label">Name</div>
						<div class="input-wrapper">
							<input 
								type="text"
								class="input" 
								name="name"
								value="Lucy"></input>
						</div>
					</div>

					<div class="field">
						<div class="field_label">Password</div>
						<div class="input-wrapper">
							<input 
								type="password"
								class="input" 
								name="password"
								value="123456"></input>
						</div>
					</div>

					<div class="field">
						<div class="field_label">Choose your agent voice</div>
						<div class="input-wrapper">
							<select class="selector" name="agentVoice">
								<option value="female-russian">Female-Russian</option>
								<option value="male-american">Male - American</option>
								<option value="female-british">Female - British</option>
							</select>
						</div>
					</div>

					<div class="field">
						<div class="field_label">Choose your agent personality</div>
						<div class="input-wrapper">
							<select class="selector" name="agentPersonality">
								<option value="friend">Friend</option>
								<option value="aunt">Aunt</option>
								<option value="butler">Butler</option>
								<option value="admirer">Admirer</option>
							</select>
						</div>
					</div>

	
				</div>
			</form>
            </div>
		</div>
    );

}

export default Profile;