// import React, { useEffect, useContext } from "react";
// import avater from "../../images/fggf.jpg";
// import { Avatar, makeStyles } from "@material-ui/core";
// import Tooltip from "@material-ui/core/Tooltip";
// import conn from "../../util/conn";
// import AuthContext from "../../context/auth-context";

// const useStyles = makeStyles((theme) => ({
// 	avatar: {
// 		width: "150px",
// 		height: "150px",
// 	},
// 	tooltip: {
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// }));

// function ProfileAvatar() {
// 	const classes = useStyles();
// 	// const auth = useContext(AuthContext);

// 	// const [avatarImage, setAvatarImage] = React.useState(avater);
// 	// const imageHandler = (e) => {
// 	// 	const reader = new FileReader();
// 	// 	reader.onload = () => {
// 	// 		if (reader.readyState === 2) {
// 	// 			setAvatarImage(reader.result);
// 	// 			// console.log(reader.result)
// 	// 			var formdata = new FormData();
// 	// 			formdata.append("image", e.target.files[0]);
// 	// 			conn.post(`/user/uploadUserPhoto/${auth.userID}`, formdata)
// 	// 				.then((res) => {
// 	// 					console.log(res);
// 	// 				})
// 	// 				.catch((err) => {
// 	// 					console.log(err);
// 	// 				});
// 	// 		}
// 	// 	};
// 	// 	reader.readAsDataURL(e.target.files[0]);
// 	// };

// 	// useEffect(() => {
// 	// 	conn.get(`/user/getUser/${auth.userID}`)
// 	// 		.then((user) => {
// 	// 			if (user.data.image !== null && user.data.image !== undefined) {
// 	// 				setAvatarImage(user.data.image);
// 	// 			}
// 	// 		})
// 	// 		.catch((e) => {
// 	// 			console.log(e);
// 	// 		});
// 	// }, [auth.userID]);

// 	return (
// 		<div className={classes.tooltip}>
// 			<label htmlFor="avatar-upload">
// 				<input
// 					id="avatar-upload"
// 					type="file"
// 					accept="image/*"
// 					// onChange={imageHandler}
// 					hidden
// 				/>
// 				<Tooltip placement="top" title="Upload avatar">
// 					<Avatar 
// 						// src={avatarImage} 
// 						scr={avater}
// 						className={classes.avatar} />
// 				</Tooltip>
// 			</label>
// 		</div>
// 	);
// }

// export default ProfileAvatar;
