import React, {useState} from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted,setSubmitted] = useState(false);

    function submitForm(){
        setSubmitted(true);
    }
    
    return(
        
            <div className="form-container">
                <span className="close-btn">Sagar Wankhade</span>
                <div className="form-content-left">
                    <img src="img/img-2.svg" alt="abcd" className="form-img"/>
                </div>
                {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess/>}
            </div>
            
        
    );
}

export default Form;