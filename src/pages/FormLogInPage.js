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
            <TopNav emoj="─=≡Σ((( つ•̀ω•́)つ" home="rgb(109, 109, 109)" feature="rgb(109, 109, 109)" team="rgb(109, 109, 109)" login="rgb(109, 109, 109)" signup = "rgb(109, 109, 109)"/>
            {!isSubmitted ? 
                (<FormLogIn submitForm={submitForm}/>) : 
                (<FormSuccess/>)}
          
            <ParticlesBg  type="polygon" bg={true} />

        </div>
    )
}

export default FormLogInPage
