import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './SignUp.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSignupMutation } from '../services/authApi';

export default function SignUp(props) {
    props.funcNav(true);
    useEffect(() => { 
        document.title = "GenExp | Sign Up"; 
    }, []);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    const [fullname,setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setcPassword] = useState("");
    const [signup] = useSignupMutation();
    const [signuperror, setSignUpError] = useState({
        passwordError: "",
        usernameError: "",
        emailError: ""

    })
    const navigate = useNavigate();
    
    const submitForm = async (e) =>{
        e.preventDefault();
        const newEntry = {
            username:fullname, 
            email:email, 
            password:password, 
            password2:password2
        }
        const response = await signup(newEntry)  
        
        if(response.data.emailExist){
            setSignUpError({emailError: "You already have an account with this email ID. Please use another email"})
        }
        
        if(response.data.usernameExist){
            setSignUpError({usernameError: "Username already exists. Please enter different username"})
        }

        if(password !== password2){            
            setSignUpError({passwordError:"Password and Confirm Password not matching"})
        }
        
        if(response.data.token){            
            navigate('/dashboard')            
        }        
    }
    
  return (
    <>
    <div className="main-div">
        <div className="signup-heading">
        <h1>SIGN UP</h1>
        </div>
        <div className="signup-box">  
            <h3>Welcome To GENEXP!</h3>
            <form name='signUpForm' method='' action="" onSubmit={submitForm}>
                <div className="inputBox">                    
                    <input type="text" name='fullname' id = 'sname' value = {fullname} onChange = {(e) => setFullName(e.target.value)} autoComplete='off' required placeholder='Enter Username'/ >
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
                
                {signuperror.usernameError ? <div style={{color:'red', fontSize: 20, marginLeft:'5%', marginRight:"5%", textAlign:'center'}}><span ><ion-icon name="alert-circle-outline"></ion-icon></span> {signuperror.usernameError}</div> : ""}
                {signuperror.emailError ? <div style={{color:'red', fontSize: 20, marginLeft:'5%', marginRight:"5%", textAlign:'center'}}><span ><ion-icon name="alert-circle-outline"></ion-icon></span> {signuperror.emailError}</div> : ""}
                {signuperror.passwordError ? <div style={{color:'red', fontSize: 20, marginLeft:'5%', marginRight:"5%", textAlign:'center'}}><span ><ion-icon name="alert-circle-outline"></ion-icon></span> {signuperror.passwordError}</div> : ""}

                <button  type="submit">SIGN UP</button>
            </form>                        
            <p>By signing up, I agree to your <b> Terms of Service </b>and <b>Privacy Policy</b>.</p>                        
        </div>    
    </div>
    </>
  )
}
