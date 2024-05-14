import React from 'react'
import RoamifyTitle from '../RoamifyTitle'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <>
    <RoamifyTitle />
    <div className="container">
        <div className="header">
            <div className="text">Create A New Account</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder='Enter Username'/>
            </div>
            <div className="input">
                <input type="email" placeholder='Enter Email'/>
            </div>
            <div className="input">
                <input type="password" placeholder='Enter Password'/>
            </div>
        </div>        
        <div className="submit-container">
            <div className="submit">Log In</div>
        </div>
        <div className="already">Already have an Account? <span>Sign In</span></div>
    </div>
    </>
  )
}

export default LoginSignup