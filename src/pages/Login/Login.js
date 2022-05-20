
import React from 'react'
import Logo90 from "../../asset/TOMSPURSE LOGO_Horizontal Logo Full Color.svg"
import "./Login.css"
import {useState, useEffect} from "react";


function Login() {
  const initialValues = { email: "" , password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
   const [isSubmit , setIsSubmit] = useState(false)
  const handleChange = (e) => {
    console.log (e.target)
    const {name , value} = e.target;
    setFormValues( {...formValues, [name]:value});
    console.log (formValues);
  }
  const handleSubmit = (e) => {
    e.preventDefault ();
   setFormErrors (validate(formValues));
    setIsSubmit (true);
  }
  useEffect (() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },  [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    }else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format!";
    }
    
    if(!values.password){
      errors.password= "Password required!";
    }else if ((values.password.length < 5)){
      errors.email= "password must be more than 5 characters!";
    }
    else if ((values.password.length > 10)){
    errors.email= "password must not be more than 10 characters!";
  }
    return errors;

  };
  return (
    <div className="login-container"> 

      <div className='welcome'>
      <img src={Logo90} alt="tompurse" />
      <h4> Welcome Back, </h4>
      <h5> Login to Continue</h5>
      </div>
      <div>
       { Object.keys(formErrors).length === 0 && isSubmit ? ( 
          <div className="ui-message-success">Signed in Successfully! </div>
        )  : (  
          <pre>{JSON.stringify(formValues ,undefined, 2)}</pre>
        )}
     <form onSubmit={handleSubmit}>
        
        <div className="login-text">
        <h3 className="login-header">Login to your account</h3>  
          
        <div className="label">
           <label> Email</label>
           <input 
           type="text" 
           name="email" 
           value={ formValues.email }
           onChange ={handleChange} />
        </div>
        <p>{formErrors.email}</p>
        <div className="label">
          
          <label> Password</label>
          <input 
           type="password"
           name="password"
           value={formValues.password}
          onChange={handleChange} />  
        </div>
        <p>{formErrors.password}</p>
        <div/>
        
        <div className="link1">
         <a href="Forgot Password" onClick={this}>Forgot password</a>

          <a href="New user? Register" onClick={this}> New user? Register</a>
        </div>
        <button className="btn-submit"> Log in</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Login