import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login(props) {
    props.funcNav(false);
    useEffect(() => { document.title = "GenExp | Login"; }, []);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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
                    <button><FontAwesomeIcon icon={faGoogle} /> Log in with Google</button>
                    <p className='small-para'> or Login with email</p>

                    <form method='' action="">

                        <div className="inputBox">
                            <input type="email" name='fullname' autoComplete='off' required placeholder='Email' />
                        </div>
                        <div className="inputBox">
                            <input type="password" name='password' autoComplete='off' required placeholder='Password' />
                        </div>
                    </form>
                    <a href="/">Forgot password?</a>
                    <Link to="/dashboard"><input type="submit" value="LOGIN" /></Link>
                    <p className='lastpara'>Create an Account</p>
                </div>
            </div>
        </>
    )
}
