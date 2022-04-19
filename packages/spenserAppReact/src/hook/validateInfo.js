export default function validateInfo(values){
    let errors={}


    if(!values.name){
        errors.name = "Name required"
    }

    //Check validate email
    if(!values.email){
        errors.email = "Email required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email is invalid"
    }

    // valid password
    if(!values.password){
        errors.password = "Password is required"
    }
    // else if(values.password.length < 6){
    //     errors.password = "Password needs to be longer than 6 characters"
    // }

    return errors
    
}