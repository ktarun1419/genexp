import React from 'react'
// import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './SignUp.css';

export default function SignUp() {
  return (
    <>
    <div className="main-div">
        <div className="signup-heading">
        <h1>SIGN UP</h1>
        </div>
        <div className="signup-box">
            <button><FontAwesomeIcon icon={faGoogle} /> Sign Up with Google</button>
            <p className='small-para'> or Sign Up with email</p>
            
            <form method='' action="">
                <div className="inputBox">                    
                    <input type="text" name='fullname' autoComplete='off' required placeholder='Enter Your Full Name'/>
                </div>
                <div className="inputBox">                    
                    <input type="email" name='fullname' autoComplete='off' required placeholder='Email'/>
                </div>
                <div className="inputBox">                    
                    <input type="password" name='password' autoComplete='off' required placeholder='Password'/>
                </div>
            </form>
            <p>By signing up, I agree to your <b> Terms of Service </b>and <b>Privacy Policy</b>.</p>
            <input type="submit" value="SIGN UP"/>
        </div>
    </div>
    </>
  )
}
