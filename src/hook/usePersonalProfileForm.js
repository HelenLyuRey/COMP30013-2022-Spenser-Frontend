// hook

import { useState, useEffect, useContext } from "react";
import conn from "../util/conn";
import AuthContext from "../context/auth-context";

const usePersonalProfileForm = (callback, validate) => {
    const [values, setValues] = useState({
        name:"",
        password: "",
        agent_voice: "",
        agent_personality: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSumitting] = useState(false);
    const auth = useContext(AuthContext);

    useEffect(() => {
		// conn.get(`/getEventOfUser/${auth.userID}`)
		conn.get(`/user/profile/${auth.userID}`)
			.then((user) => {
                // console.log("XXXXX")
				// console.log(user.data)
				// eslint-disable-next-line
                setValues({
 //                   ...values,
                    ["name"]: user.data.name,
                    ["password"]: user.data.password,
                    ["agent_voice"]: user.data.agent_voice,
                    ["agent_personality"]: user.data.agent_personality
                })
                // console.log(values.firstName)
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

    // const convertGender = (gender) => {
    //     if (gender === "male") {
    //         return "Male";
    //     } else if (gender === "female") {
    //         return "Female"
    //     } else {
    //         return "No Gender"
    //     }
    // }

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
    };

    // make sure when clicking on submit, it need the required field filled out
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            // console.log(values.firstname)
            // // history.push('/success') // redirect
            callback && callback();
        }
    }, [errors, isSubmitting, callback]);

    return { handleChange, values, handleSubmit, errors };
};

export default usePersonalProfileForm;
