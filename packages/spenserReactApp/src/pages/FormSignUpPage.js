import React, {useState} from 'react'
import FormSignUp from '../components/auth/FormSignUp'
import FormSuccess from '../components/auth/FormSuccess'
import TopNav from '../components/common/TopNav'
// can just direct to the homepage this is ust here for demonstration

// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
// import FormSignUpBackup from '../components/FormSignUpBackup'

const FormSignUpPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }

    return (
        
        <div>
            {/* <div class="bg-image"></div> */}
            <TopNav/>
            {/* <FormSignUp/> */}
            {!isSubmitted ? 
                (<FormSignUp submitForm={submitForm}/>) : 
                (<FormSuccess/>)} 

        </div>
    )
}

export default FormSignUpPage
