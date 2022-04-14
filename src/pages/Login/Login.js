// import Start from "../../components/Start/Start"
// import Register from "../../components/Register/Register"
// import {Switch, Route, Link } from 'react-router-dom';
// import "./Login.css"

// const Login = () => {
//   return (

//     <div>
//       <header>  
//       <div> <h4>Welcome, Register to continue</h4></div>
    
//      < Switch>
//        <Route path="/Start" exact>
//         <Login />
//         <Link to="/Register"> New user? register</Link>
//        </Route>
//        <Route path="/register" exact component={register} />
       
//      </Switch>
    
//     </header>
//     </div>
//   );
// }
// export default Login;
import React from 'react'
import Logo90 from "../../asset/TOMSPURSE LOGO_Horizontal Logo Full Color.svg"
import "./Login.css"
import {useState, useEffect} from "react";


function Login() {
  const initialValue ={ Email: "" , Password: ""};
  const [formValues , setFormValues] = useState(initialValue);
  const [formErrors , setFormErrors] = useState({});
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
     console.log (formValues);
    }

  },[formErrors]);
  const validate = (values) => {
    const errors = { };
    const regex = /^[ ^\s@]+@[ ^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
      errors.email= "Email required!"
    }else if (!regex.test(values.email)){
      errors.email= "this is not a valid email format!"
    }
    if(!values.password){
      errors.password= "Password required!"
    }else if (!regex.test(values.password)){
      errors.email= "this is not a password!"
    }

  }
  return (
    <div className="login-container">  
      <div className='welcome'>
      <img src={Logo90} alt="tompurse" />
      <h4> Welcome Back, </h4>
      <h5> Login to Continue</h5>
      </div>
      {/* <pre>{JSON.stringify(formValues ,undefined ,2)}</pre> */}
     <form onSubmit={handleSubmit}>
        {/* <div className="login-text">
          <div className="lebel1">
          <label>Fullname</label>
          <input type="text" name="firstname" placeholder='firstname'/>
          </div>
          <div className="lebel">
          <label> </label>
          <input type="text" name="surname" placeholder='surname'/>
          </div>
        </div> */}
        <div className="login-text">
        <h3 className="login-header">Login to your account</h3>  
         <p>{formErrors.email}</p>
        <div className="label">
          <label> Email</label>
          <input type="text" name="email" value={formValues.email}
           onChange ={handleChange} />
        </div>
        <p>{formErrors.password}</p>
        <div className="label">
        <label> Password</label>
          <input type="password" name="password" value={formValues.password}onChange={handleChange} />  
        </div>
        <div/>
        {/* <div className="label"> 
          <label> Confirm Password</label>
          <input type=" confirm password" name="confirm password" placeholder="conform password"/>
        </div> */}  
        <div className="link1">
         <a href="Forgot Password" onClick={this}>Forgot password</a>

          <a href="New user? Register" onClick={this}> New user? Register</a>
        </div>
        <button className="btn-submit"> Log in</button>

      </div>
    </form>
    </div>
  )
}

export default Login