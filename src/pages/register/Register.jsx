import React from 'react'
import "./register.css";


function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>Username</label>
      <input type="text" className="registerInput" placeholder="Enter your username" />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" className="registerInput" />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
    
      </button>
    </div>
  )
}
export default Register;