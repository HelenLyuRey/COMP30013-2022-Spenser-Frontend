// hook

import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

const useForm = (callback, validate) => {
	// const history = useHistory();
	const [values, setValues] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSumitting] = useState(false);

	// making sure the value is set after entered the information
	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	// make sure the page don't refresh after submit information
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(values));
		setIsSumitting(true);
		// const reponse = await fetch('http://http://localhost:3000/signup', {
		//     method: 'POST',
		//     headers: {'Content-Type': 'application/json'},
		//     body: JSON.stringify({
		//         firstname,
		//         lastname,
		//         email,
		//         password
		//     })
		// })

		// const content = await reponse.json();

		// console.log(content)
	};

	// make sure when clicking on submit, it need the required field filled out
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			// console.log(values.firstname)
			// // history.push('/success') // redirect
			callback();
		}
	}, [errors, isSubmitting, callback]);

	return { handleChange, values, handleSubmit, errors };
};

export default useForm;
