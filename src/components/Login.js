import React from 'react'
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function Login(props) {
    props.funcNav(false);
    useEffect(() => { document.title = "GenExp | Login"; }, []);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email,password)
    return (
        <>
            <div class="button-l-group">                
                <Link to="/" ><button> BACK TO HOME</button></Link>                
            </div>
            <div className="main-login-div">

                <div className="login-heading">
                    <h1>LOGIN</h1>
                </div>
                <div className="login-box">
                    <h3>Welcome To GENEXP!</h3>

                    <form name='loginForm' method='' action="" >

                        <div className="inputBox">
                            <input type="email" name='fullname' id = 'lemail' value={email} onChange = {(e) => setEmail(e.target.value)} autoComplete='off' required placeholder='Email' />
                        </div>
                        <div className="inputBox">
                            <input type="password" name='password' id = 'lpassword' value={password} onChange = {(e) => setPassword(e.target.value)} autoComplete='off' required placeholder='Password' />
                        </div>
                    </form>
                    <a href="/">Forgot password?</a>
                    <Link to="/dashboard"><input type="submit" value="LOGIN" /></Link>
                    <Link to = "/signup"><p className='lastpara'>Create an Account</p></Link>
                </div>
            </div>
        </>
    )
}
