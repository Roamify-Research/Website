// AccountLogin.js

import React from 'react';
import './AccountLogin.css';
import apple from '../Assets/apple.png';
import facebook from '../Assets/facebook.png';
import google from '../Assets/google.png';

const AccountLogin = () => {
  return (
    <div className="account-login-container">
      <h1>ROAMIFY</h1>
      <h2>Login to your Account</h2>
      <h3>Login using your socials</h3>

      <div className="social-images">
        {/* Add your image sources here */}
        <img src={google} alt="" />
        <img src={facebook} alt="" />
        <img src={apple} alt="" />
      </div>

      <div className="underline"></div>

      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="input">
          <input type="password" placeholder="Enter Password" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit">Sign In</div>
      </div>

      {/* New Container for Sign Up */}
      <div className="signup-container">
        <h1>NEW HERE?</h1>
        <h2>Sign Up and Rediscover Roaming</h2>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default AccountLogin;
