import React from 'react';
import './Settings.css'; 
import { Link, useNavigate } from "react-router-dom";
import "./DashHome.css"
import { useDispatch } from 'react-redux';
import { unSetToken } from '../features/tokenSlice';
// import { Link, useLocation } from "react-router-dom";
// import { useEffect } from 'react';


export default function Settings(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dashLogout = () => {
        dispatch(unSetToken(null))
        localStorage.removeItem('token')
        navigate('/login')
    }
  props.funcNav(false);
    let profilename = "Your Name",
        profileimage = "/images/profile.png";
  // useEffect(() => { document.title = "GenExp | Sign Up"; }, []);
  //   const { pathname } = useLocation();
  return (
    <><div className='dashboard'>
    <div className='dash-nav'>
        <div className='dash-nav-header'>
            <h2>GENEXP</h2>
        </div>
        <div className='dash-nav-options'>
            <div className='dash-profile-pic'>
                <img src={profileimage} alt="" />
            </div>

            <div className='dash-nav-user'>
                <h2>{profilename}</h2>
                <p>Student</p>
            </div>

            <div className='dash-nav-menus'>
                <ul>
                    <li>
                    <Link to="/dashboard"><span><ion-icon name="home-outline"></ion-icon></span></Link>
                        <Link to="/dashboard" id='home'> Home</Link>
                    </li>
                    <li>
                    <Link to="/offers"><span><ion-icon name="laptop-outline"></ion-icon> </span></Link>
                        <Link to="/offers" id='offer'>Offers</Link>
                    </li>
                    <li>
                    <Link to="/settings"><span><ion-icon name="settings-outline"></ion-icon></span></Link>
                        <Link to="/settings" id='settings'> Settings</Link>
                    </li>

                </ul>
            </div>

        </div>

        <div className='dash-nav-footer'>
            <div>
                <p>Making Recruitment Experience Better</p>
            </div>
        </div>



    </div>

    <div className='dash-right'>
        <div className='dash-right-header'>
            <h1>SETTINGS</h1>
            <Link to='/'><button onClick={dashLogout}>Logout</button></Link>
        </div>
    <div className='screen'>
    <div className = "right-section">
      
      <form method = '' action = '' >
                <div className="formBox">                    
                    <input type="text" name='username' autoComplete='off' required placeholder='Username'/>
                </div>
                <div className="formBox">                    
                    <input type="text" name='fullname' autoComplete='off' required placeholder='Full Name'/>
                </div>
                <div className="formBox">                    
                    <input type="email" name='email' autoComplete='off' required placeholder='Email'/>
                </div>
                <div className="formBox">                    
                    <input type="password" name='password' autoComplete='off' required placeholder='Password'/>
                </div>
                <div className="formText">
                  <textarea placeholder='Description' name="Description" id="description" cols="30" rows="10"></textarea>
                </div>
                {/* <div className="formBox">
                  <h3>Upload Your CV </h3>
                  <input type="file" name="file"  />
                </div> */}
                
      </form>
            
    </div>
    </div>

        


    </div>
</div></>
  )
}



