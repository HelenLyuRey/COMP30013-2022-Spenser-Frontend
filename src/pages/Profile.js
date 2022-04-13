import LoggedInNav from "../components/common/LoggedInNav";
import ProfileAvatar from "../components/profile/PersonalAvatar";
import './Profile.css'
import usePersonalProfileForm from '../hook/usePersonalProfileForm';
import conn from '../util/conn'

import {useHistory} from "react-router-dom";
import React, { useContext, useState} from 'react';
import AuthContext from "../context/auth-context";
import Notification from "../components/common/Notification";


const Profile = ({submitForm}) => {        

	const auth = useContext(AuthContext);
	let history = useHistory();

    const { handleChange, values, handleSubmit } = usePersonalProfileForm (
		submitForm
	);

	const [notifyUpdate, setNotifyUpdate] = useState(false);
	const handleNotifyUpdate = () => {
		setNotifyUpdate(true);
	};
	const handleNotifyUpdateClose = () => {
		setNotifyUpdate(false);
	};


	async function profileSubmitHandler() {
        
		await conn
			.post(`/user/updateProfile/${auth.userID}`, {
                name: values.name,
                password: values.password,
				agent_voice: values.agent_voice,
        		agent_personality: values.agent_personality
			})
            .then((res) => {
                // console.log(res.data)
				handleNotifyUpdate();
            })
			.catch((err) => {
				console.log(err);
			});
        
        // conn.get(`/user/profile/${auth.userID}`)
        // .then((user) => {
        //     // console.log("XXXXX")
        //     console.log(user.data.gender)
        //     // console.log(values.firstName)
        // })
        // history.push("/dashboard");
	}
   
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
						Hello, {values.name}
					</span>
					{/* : "loading"} */}
				</h1>

				

			<form className="form-profile" 
				onSubmit={handleSubmit}
			>
				<div className="avatar">
					<ProfileAvatar/>
				</div>
				
				<div className="profile-container">
					<div className="field">
						<div className="field_label">Name</div>
						<div className="input-wrapper">
							<input 
								type="text"
								className="input" 
								name="name"
								value={values.name}
								onChange={handleChange}></input>
						</div>
					</div>

					<div className="field">
						<div className="field_label">Password</div>
						<div className="input-wrapper">
							<input 
								type="password"
								className="input" 
								name="password"
								value={values.password}
								onChange={handleChange}></input>
						</div>
					</div>

					<div className="field">
						<div className="field_label">Choose your agent voice</div>
						<div className="input-wrapper">
							<select 
								className="selector" 
								name="agentVoice" 
								value={values.agent_voice}
								onChange={handleChange}>
								<option value="female-russian">Female-Russian</option>
								<option value="male-american">Male - American</option>
								<option value="female-british">Female - British</option>
							</select>
						</div>
					</div>

					<div className="field">
						<div className="field_label">Choose your agent personality</div>
						<div className="input-wrapper">
							<select 
								className="selector" 
								name="agentPersonality" 
								value={values.agent_personality}
								onChange={handleChange}>
								<option value="friend">Friend</option>
								<option value="aunt">Aunt</option>
								<option value="butler">Butler</option>
								<option value="admirer">Admirer</option>
							</select>
						</div>
					</div>

					<div className="field">
						<button 
							className="submit-btn" 
							type="submit" 
							onClick={profileSubmitHandler}>
							UPDATE
						</button>
					</div>

					{notifyUpdate && (
						<Notification
							status={notifyUpdate}
							onClose={handleNotifyUpdateClose}
							successMessage="You have successfully updated your profile!"
							type="success"
						/>
					)}
				</div>
			</form>
            </div>
		</div>
    );

}

export default Profile;