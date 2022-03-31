import React, {useState} from 'react'
import FormLogIn from '../components/auth/FormLogIn'
import FormSuccess from '../components/auth/FormSuccess'
import TopNav from '../components/common/TopNav'
// can just direct to the homepage this is ust here for demonstration

import ParticlesBg from 'particles-bg'

const FormLogInPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }

    return (
        
        <div>
            {/* <div class="bg-image"></div> */}
            <TopNav/>
            {!isSubmitted ? 
                (<FormLogIn submitForm={submitForm}/>) : 
                (<FormSuccess/>)}

        </div>
    )
}

export default FormLogInPage
