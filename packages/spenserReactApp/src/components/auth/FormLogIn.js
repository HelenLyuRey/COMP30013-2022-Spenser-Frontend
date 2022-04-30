import React, { useContext, useState } from "react";
import useForm from "../../hook/useForm";
import validate from "../../hook/validateInfo";
import conn from "../../util/conn";
import AuthContext from "../../context/auth-context";
import "./Form.css";
import { Link, useHistory } from "react-router-dom";
import Notification from "../common/Notification";
import { GoogleLogin } from "react-google-login";
import { CommonLoading } from "react-loadingg";
import formBackground from "../../images/form-background.jpg"

const FormLogIn = ({ submitForm }) => {
	const [loading, setLoading] = useState(false);
	const [notifyLogin, setNotifyLogin] = useState(false);
	const [notifyLoginFailure, setNotifyLoginFailure] = useState(false);
	const [notifyLoginPending, setNotifyLoginPending] = useState(false);

	const handleNotifyLogin = () => {
		setNotifyLogin(true);
	};
	const handleNotifyLoginClose = () => {
		setNotifyLogin(false);
	};

	const handleNotifyLoginFailure = () => {
		setNotifyLoginFailure(true);
	};
	const handleNotifyLoginFailureClose = () => {
		setNotifyLoginFailure(false);
	};

	const handleNotifyLoginPending = () => {
		setNotifyLoginPending(true);
	};
	const handleNotifyLoginPendingClose = () => {
		setNotifyLoginPending(false);
	};

	const { handleChange, values, handleSubmit, errors } = useForm(
		submitForm,
		validate
	);
	let history = useHistory();

	const auth = useContext(AuthContext);
	async function authSubmitHandler() {
		setLoading(true);
		await conn
			.post("/auth/login", {
				email: values.email,
				password: values.password,
			})
			.then((res) => {
				console.log("!!!!!");
				// console.log(res.data.data._id);
				// success("Login Success!");
				console.log(res.data.code);
				setLoading(false);
				if (res.data.code === 0) {
					handleNotifyLogin();
					console.log(res.data.data);
					setTimeout(async () => {
						auth.onLogin(res.data.data._id);
						history.push("/dashboard");
					}, 2000);
				} else if (res.data.code === -4) {
					console.log("account pending");
					handleNotifyLoginPending();
				} else {
					console.log("logined failure");
					handleNotifyLoginFailure();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	async function authGoogleHandler(response) {
		console.log(response);
		await conn
			.post("/auth/signup", {
				email: response.profileObj.email,
				password: response.profileObj.googleId,
				name: response.profileObj.givenName,
				status: "Active",
			})
			.then(() => {})
			.catch((e) => {
				console.log(e);
			});

		await conn
			.post("/auth/login", {
				email: response.profileObj.email,
				password: response.profileObj.googleId,
			})
			.then((res) => {
				console.log(res.data.code);
				setLoading(false);
				handleNotifyLogin();
				console.log(res.data.data);
				setTimeout(async () => {
					auth.onLogin(res.data.data._id);
					history.push("/tracker");
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function authFailureHandler() {
		alert("Sorry, your account is invalid.");
	}

	if (loading) {
		return <CommonLoading />;
	}
	return (
		<>
		<img className="form-img" src={formBackground} alt=""/>
		<div className="form-content">
			<form className="form-login" onSubmit={handleSubmit}>
				<div className="form-box">
					<h2>Welcome Back!</h2>

					<div className="form-inputs">
						<input
							type="text"
							name="email"
							id="email"
							data-testid="email"
							className="form-input"
							placeholder="Email"
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && <p className="error">{errors.email}</p>}
					</div>

					<div className="form-inputs">
						<input
							type="password"
							name="password"
							data-testid="password"
							className="form-input"
							placeholder="Password"
							value={values.password}
							onChange={handleChange}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>

					<button
						className="form-input-btn"
						type="submit"
						data-testid="submit"
						onClick={authSubmitHandler}
					>
						Login
					</button>
					{/* <div>
						<GoogleLogin
							clientId="425837192336-ol7elme3vmnlnivj7lauikr6sr2mhmjr.apps.googleusercontent.com"
							// buttonText="Login with Google"
							onSuccess={authGoogleHandler}
							onFailure={authFailureHandler}
							render={(renderProps) => (
								<button
									className="form-input-btn"
									onClick={renderProps.onClick}
								>
									Login with Google
								</button>
							)}
						/>
					</div> */}
					{notifyLogin && (
						<Notification
							status={notifyLogin}
							onClose={handleNotifyLoginClose}
							successMessage="Welcome to Spenser!"
							type="success"
						/>
					)}
					{notifyLoginFailure && (
						<Notification
							status={notifyLoginFailure}
							onClose={handleNotifyLoginFailureClose}
							successMessage="Oops! incorrect Email or Password, Please try again."
							type="error"
						/>
					)}
					{notifyLoginPending && (
						<Notification
							status={notifyLoginPending}
							onClose={handleNotifyLoginPendingClose}
							successMessage="Your account is still pending, please verify your account!"
							type="error"
						/>
					)}
					<br></br>
					<span className="form-input-login">
						Don't have an account? Signup{" "}
						<Link to="/auth/signup">here</Link>
					</span>
				</div>
			</form>
		</div>
		</>
	);
};

export default FormLogIn;
