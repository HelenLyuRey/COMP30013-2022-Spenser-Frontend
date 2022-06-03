import React from "react";
import useForm from "../../hook/useForm";
import validate from "../../hook/validateInfo";
import conn from "../../util/conn.js";
import "./Form.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import formBackground from "../../images/form-background.jpg"

// import { BrowserRouter as Link } from "react-router-dom";

const FormSignUp = ({ submitForm }) => {
	let history = useHistory();

	const { handleChange, values, handleSubmit, errors } = useForm(
		submitForm,
		validate
	);

	async function authSubmitSignUpHandler() {
		console.log("in here")
		await conn
			.post("/auth/signup", {
				email: values.email,
				password: values.password,
				name: values.name,
			})
			// .then((user) => {
			// 	alert(
			// 		"Please check your email and verify your account before login!"
			// 	);
			// })
			.catch((e) => {
				console.log(e);
			});
		if (
			values.email &&
			values.password &&
			values.name
		) {
			history.push("/auth/login");
		}
	}

	return (
		<>
		<img className="form-img" src={formBackground} alt=""/>
		<div className="form-content">
			<form className="form-signup" onSubmit={handleSubmit}>
				<div className="form-box">
					<h2>Create a new account</h2>

	
					<div className="form-inputs">
						<input
							type="text"
							name="email"
							className="form-input"
							placeholder="Email"
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>

					<div className="form-inputs">
						<input
							type="password"
							name="password"
							className="form-input"
							placeholder="Password"
							value={values.password}
							onChange={handleChange}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>

					<div className="form-inputs">
						<input
							type="text"
							name="name"
							className="form-input"
							placeholder="Enter your name here"
							value={values.name}
							onChange={handleChange}
						/>
						{errors.name && <p>{errors.name}</p>}
					</div>

					<button
						className="form-input-btn"
						type="submit"
						onClick={authSubmitSignUpHandler}
					>
						Signup
					</button>
					<br />
					{/* <Link to="/success" className="form-input-btn" type="sbmit">Sign up</Link> */}
					{/* <span className="form-input-login">
						Already have an account? Login{" "}
						<Link to="/auth/login">here</Link>
					</span> */}
					<span className="form-input-login">
						Already have an account? Login{" "}
						<Link to="/auth/login">here</Link>
					</span>
				</div>
			</form>
		</div>
		</>
	);
};

export default FormSignUp;
