import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const FormSignUpBackup = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async e =>{
        e.preventDefault()

        const response = await fetch('http://http://localhost:3000/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })

        })

        const content = await response.json()
        console.log(content)

    }

    return (
        <div className = "form-content">
            <form className = "form-signup" onSubmit={submit}>
                {/* <div className="form-box"> */}
                    <h4>Create a new account</h4>
                    <div className = "form-inputs">
                        <input type="text" name="firstname" className="form-input" placeholder="First name" 
                        onChange={e => setFirstname(e.target.value)}/>
                    </div>

                    <div className = "form-inputs">
                        <input type="text" name="lastname" className="form-input" placeholder="Last name" 
                        onChange={e => setLastname(e.target.value)}/>
                    </div>

                    <div className = "form-inputs">
                        <input type="text" name="email" className="form-input" placeholder="Email" 
                        onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className = "form-inputs">
                        <input type="password" name="password" className="form-input" placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    
                    <button className="form-input-btn" type="sbmit">Signup</button><br/>
                    {/* <Link to="/success" className="form-input-btn" type="sbmit">Sign up</Link> */}
                    <span className="form-input-login">
                        Already have an account? Login <Link to="/login">here</Link>
                    </span>
                {/* </div> */}
            </form>  
        </div>

    )
}

export default FormSignUpBackup
