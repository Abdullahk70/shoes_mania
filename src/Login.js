import React from 'react'
import login from "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="wrapper bg-white "style={{marginTop:"9rem"}}>
        <div className="h2 text-center">Shoes Mania</div>
        <div className="h4 text-muted text-center pt-2">Enter your login details</div>
        <form className="pt-3">
            <div className="form-group py-2">
                <div className="input-field">
                    <span className="far fa-user p-2"></span>
                    <input type="text" placeholder="Username or Email Address" required className=""/>
                </div>
            </div>
            <div className="form-group py-1 pb-2">
                <div className="input-field">
                    <span className="fas fa-lock p-2"></span>
                    <input type="text" placeholder="Enter your Password" required className=""/>
                    <button className="btn bg-white text-muted">
                        <span className="far fa-eye-slash"></span>
                    </button>
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
            <button className="btn btn-block text-center my-3">Log in</button>
            <div className="text-center pt-3 text-muted">Not a member? <Link to="../signup"> <p >Sign Up</p></Link></div>
        </form>
    </div>
  )
}
