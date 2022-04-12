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



function Login() {
  return (
    <div className="login-container">  
      <div className='welcome'>
      <img src={Logo90} alt="tompurse" />
      <h4> Welcome Back, </h4>
      <h5> Login to Continue</h5>
      </div>
     <form>
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
         
        <div className="label">
          <label> Email</label>
          <input type="text" name="email"/>
        </div>
        <div className="label">
        <label> Password</label>
          <input type="password" name="password" />
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