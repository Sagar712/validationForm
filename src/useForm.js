import {useState, useEffect} from 'react';
import validate from './ValidateInfo';


const useForm = (submitForm) => {
    const [values, setValues] = useState({

        username : '',
        email: '',
        password:'',
        password2:''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitte, setisSubmitte] = useState(false);
    
    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values));
        setisSubmitte(true);
        
    };

    const handleChange = e =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })

    };

    useEffect(() => {
        if(Object.keys(errors).length ===0 && isSubmitte){
            submitForm();
        }
    },
    [errors]
    );

    return {handleChange,values, handleSubmit, errors};

}

export default useForm;