import React from 'react'
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useLoginMutation } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/tokenSlice';

export default function Login(props) {
    props.funcNav(false);
    useEffect(() => { document.title = "GenExp | Login"; }, []);
    const { pathname } = useLocation();
    const [login] = useLoginMutation()
    const [loginerror, setLoginError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginForm = async (e) =>{
        e.preventDefault();
        const newEntry = {
            username:username,             
            password:password,             
        }

        const response = await login(newEntry)        

        if(response.error){
            setLoginError("Invalid Username or Password")
        }

        if(response.data){
            localStorage.setItem('token', response.data.token)
            let token = localStorage.getItem('token')
            dispatch(setToken(token))
            navigate('/dashboard')   
        }             
    }

    let token = localStorage.getItem('token')    
    useEffect(() => {
        
        dispatch(setToken(token))
        
    }, [token, dispatch])
          
    return (
        <>
            <div className="button-l-group">                
                <Link to="/" ><button> BACK TO HOME</button></Link>                
            </div>
            <div className="main-login-div">

                <div className="login-heading">
                    <h1>LOGIN</h1>
                </div>
                <div className="login-box">
                    <h3 style={{marginBottom:'5%'}}>Welcome To GENEXP!</h3>

                    <form name='loginForm' method='' action="" onSubmit={loginForm}>

                        <div className="inputBox">
                            <input type="text" name='fullname' id = 'lemail' value={username} onChange = {(e) => setUsername(e.target.value)} autoComplete='off' required placeholder='Username' />
                        </div>
                        <div className="inputBox">
                            <input type="password" name='password' id = 'lpassword' value={password} onChange = {(e) => setPassword(e.target.value)} autoComplete='off' required placeholder='Password' />
                        </div>
                        <button  type="submit">LOGIN</button>
                    </form>
                    {loginerror ? <div style={{color:'red', fontSize: 20, marginTop:'5%', marginLeft:'5%', marginRight:"5%", textAlign:'center'}}><span ><ion-icon name="alert-circle-outline"></ion-icon></span> {loginerror}</div> : ""}
                    
                    <Link to = "/signup"><p className='lastpara'>Create an Account</p></Link>
                </div>
            </div>
        </>
    )
}
