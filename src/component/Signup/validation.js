const validation = (values) => {
    
    let errors = {};
    if(!values.username){
        errors.username= 'Required'
    } 
    if(!values.email){
        errors.email= 'Required'
    } 
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email= "Email is invalid"
    }
    if(!values.password){
        errors.password= 'Required'
    }
    else if (values.password.length < 8){
        errors.password = "Password must be more than 8 charachters"
    }    
    return errors
}

export default validation
