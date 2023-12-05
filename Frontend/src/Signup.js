import React, { useState } from 'react'
import login from "./Login.css"
import { Link } from 'react-router-dom'
import { addUser } from './services/api'

export default function SignUp() {
  const [view,setView]=useState({
    email:"",
    password:"",
    phoneNumber:"",
  })
 const onChange=(e)=>{
    setView({...view,[e.target.name]:e.target.value});
 }

 const onClick=()=>{
  addUser(view);
  setView({ email:"",
  password:"",
  phoneNumber:"",})
 }
   return (
    <div className="wrapper bg-white "style={{marginTop:"9rem"}}>
        <div className="h2 text-center">Shoes Mania</div>
        <div className="h4 text-muted text-center pt-2">Enter your Signup details</div>
        <form className="pt-3">
            <div className="form-group py-2">
                <div className="input-field">
                    <span className="far fa-user p-2"></span>
                    <input type="text" name="email" value={view.email} onChange={onChange} placeholder="Username or Email Address" required className=""/>
                </div>
            </div>
            <div className="form-group py-1 pb-2">
                <div className="input-field">
                    <span className="fas fa-lock p-2"></span>
                    <input type="text" name="password" value={view.password} onChange={onChange} placeholder="Enter your Password" required className=""/>
                    <button className="btn bg-white text-muted">
                        <span className="far fa-eye-slash"></span>
                    </button>
                </div>
            </div>
            <div className="form-group py-2">
                <div className="input-field">
                    <span className="far fa-user p-2"></span>
                    <input type="text" name="phoneNumber" value={view.phoneNumber} onChange={onChange} placeholder="Phone Number" required className=""/>
                </div>
            </div>
            <div className="d-flex align-items-start">
                <div className="remember">
                    <label className="option text-muted"> Remember me
                        <input type="radio" name="radio"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="ml-auto">
                    <a href="#" id="forgot">Forgot Password?</a>
                </div>
            </div>
            <button className="btn btn-block text-center my-3" onClick={onClick}>Sign Up</button>
            <div className="text-center pt-3 text-muted">Already a member?<Link to="../Login"> <p >Login</p></Link></div>
        </form>
    </div>
  )
}