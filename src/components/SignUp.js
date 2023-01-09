import React from 'react'
// import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './SignUp.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import {useSignupMutation} from '../services/authApi';

export default function SignUp(props) {
    props.funcNav(true);
    useEffect(() => { document.title = "GenExp | Sign Up"; }, []);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [fullname,setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setcPassword] = useState("");
    const [signup, {isLoading, isSuccess}] = useSignupMutation();
    const navigate = useNavigate();

    
    const submitForm = async (e) =>{
        e.preventDefault();
        console.log(fullname)
        console.log(email)
        console.log(password)
        console.log(password2)
        
        
        const newEntry = {
            username:fullname, 
            email:email, 
            password:password, 
            password2:password2
        }

        const res = await signup(newEntry)
        navigate('/dashboard')
    }

    
  return (
    <>
    <div className="main-div">
        <div className="signup-heading">
        <h1>SIGN UP</h1>
        </div>
        <div className="signup-box">
            
            
            <form name='signUpForm' method='' action="" onSubmit={submitForm}>
                <div className="inputBox">                    
                    <input type="text" name='fullname' id = 'sname' value = {fullname} onChange = {(e) => setFullName(e.target.value)} autoComplete='off' required placeholder='Enter Your Username'/ >

                </div>
                <div className="inputBox">                    
                    <input type="email" name='email' id = 'semail' value = {email} onChange = {(e) => setEmail(e.target.value)} autoComplete='off' required placeholder='Email'/>
                </div>
                <div className="inputBox">                    
                    <input type="password" name='password' id = 'spassword' value = {password} onChange = {(e) => setPassword(e.target.value)} autoComplete='off' required placeholder='Password'/>
                </div>
                <div className="inputBox">                    
                    <input type="password" name='cpassword' id = 'scpassword' value = {password2} onChange = {(e) => setcPassword(e.target.value)} autoComplete='off' required placeholder='Confirm Password'/>
                </div>
                <button  type="submit">SIGN UP</button>
            </form>
            
            <p>By signing up, I agree to your <b> Terms of Service </b>and <b>Privacy Policy</b>.</p>
            
        </div>
        {/* <div>
    {
        allEntry.map((a) => {
            return(<div>
                <p>{a.fullname}</p>
                <p>{a.email}</p>
                <p>{a.password}</p>
            </div>)
        })

    }
    </div> */}
    </div>
    
    

    </>
  )
}
