import LoggedInNav from "../components/common/LoggedInNav";
// import ProfileAvatar from "../components/profile/PersonalAvatar";
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

			})
            .then((res) => {
                // console.log(res.data)
				handleNotifyUpdate();
				// sessionStorage.setItem("voiceName", res.data.agent_voice);
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


			<div className='profile-title'>


				<h1>
					<span>
						Hello, {values.name}
					</span>
				</h1>

				

			<form className="form-profile" 
				onSubmit={handleSubmit}
			>
				{/* <div className="avatar">
					<ProfileAvatar/>
				</div> */}
				
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
								name="agent_voice" 
								value={values.agent_voice}
								onChange={handleChange}>
									<option>Jenny - Neutral female agent</option>
									<option>Aria - Assertive female agent</option>
									<option>Guy - Energetic male agent</option>
									<option>Emily - Relaxed female agent</option>							
								{/* <option>Google UK English Female</option>
								<option>Google UK English Male</option>
								<option>Google US English</option>
								<option>Microsoft Catherine - English (Australia)</option>
								<option>Microsoft David - English (United States)</option>
								<option>Microsoft James - English (Australia)</option>
								<option>Microsoft Mark - English (United States)</option>
								<option>Microsoft Zira - English (United States)</option> */}
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