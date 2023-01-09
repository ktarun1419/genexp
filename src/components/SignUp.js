import React from 'react'
// import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './SignUp.css';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

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
    const [cpassword, setcPassword] = useState("");

    const [allEntry, setAllEntry] = useState("");

    console.log(allEntry);

    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry = {fullname:fullname, email:email, password:password, cpassword:cpassword}

        setAllEntry([...allEntry,newEntry]);
    }
  return (
    <>
    <div className="main-div">
        <div className="signup-heading">
        <h1>SIGN UP</h1>
        </div>
        <div className="signup-box">
            <button><FontAwesomeIcon icon={faGoogle} /> Sign Up with Google</button>
            <p className='small-para'> or Sign Up with email</p>
            
            <form name='signUpForm' method='' action="" onSubmit={submitForm}>
                <div className="inputBox">                    
                    <input type="text" name='fullname' id = 'sname' value = {fullname} onChange = {(e) => setFullName(e.target.value)} autoComplete='off' required placeholder='Enter Your Full Name'/>
                </div>
                <div className="inputBox">                    
                    <input type="email" name='email' id = 'semail' value = {email} onChange = {(e) => setEmail(e.target.value)} autoComplete='off' required placeholder='Email'/>
                </div>
                <div className="inputBox">                    
                    <input type="password" name='password' id = 'spassword' value = {password} onChange = {(e) => setPassword(e.target.value)} autoComplete='off' required placeholder='Password'/>
                </div>
                <div className="inputBox">                    
                    <input type="text" name='cpassword' id = 'scpassword' value = {cpassword} onChange = {(e) => setcPassword(e.target.value)} autoComplete='off' required placeholder='Confirm Password'/>
                </div>
            </form>
            <p>By signing up, I agree to your <b> Terms of Service </b>and <b>Privacy Policy</b>.</p>
            <Link to="/dashboard"><input type="submit" value="SIGN UP"/></Link>
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
