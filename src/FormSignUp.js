import React from 'react';
import useForm from './useForm';
//import validate from './ValidateInfo';
import './Form.css';



const FormSignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors
    } = useForm(submitForm);

    return(
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Hey, Get started with us today by signing up form</h1>
                <div className='form-inputs'>
                    <label 
                        className='form-label'
                        htmlFor='username'>
                            Username
                    </label>
                    <input id='username' type='text' name='username' 
                    className='form-input' placeholder='username'
                    value={values.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label 
                        className='form-label'
                        htmlFor='email'>
                            Email
                    </label>
                    <input id='email' type='email' name='email' 
                    className='form-input' placeholder='email'
                    value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label 
                        className='form-label'
                        htmlFor='password'>
                            Password
                    </label>
                    <input  id ='password' type='password' name='password' 
                    className='form-input' placeholder='password'
                    value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label 
                        className='form-label'
                        htmlFor='password2'>
                            Password 2
                    </label>
                    <input id ='password2' type='password' name='password2' 
                    className='form-input' placeholder='password2'
                    value={values.password2} onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>Sign Up</button>
                <span className='form-input-login'>Already Have an account?<a href='#'>Login here.</a></span>
            </form>
        </div>
    )
}

export default FormSignUp;