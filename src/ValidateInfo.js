
export default function ValidateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    if(!values.email){
        errors.email = "Email required"       
    }
    else if(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Invalid email"
    }
    if(!values.password){
        errors.password = "password required" 
    }
    else if(values.password.length<5){
        errors.password = "Password must be > 5 characters"
    }

    if(!values.password2){
        errors.password2 = "password required"
    }
    else if(values.password !== values.password2){
        errors.password2 = "Please enter same password"
    }
    

    return errors;
}