import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./DashHome.css"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { unSetToken } from '../features/tokenSlice';

export default function DashHome(props) {
    const dashLogout = () => {
        dispatch(unSetToken(null))
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        props.funcNav(false);
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

   

    let profilename = "Your Name",
        profileimage = "/images/profile.png";
    return (
        <>
            <div className='dashboard'>
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
                        <h1>DASHBOARD</h1>
                        <Link to='/login'><button onClick={dashLogout}>Logout</button></Link>
                    </div>

                    <div className='dash-section-top'>
                        <div className='column lf'>
                            <div className='dash-box'>

                            </div>
                            <div className='dash-box'>

                            </div>
                        </div>
                        <div className='column'>
                            <div className='dash-box dash-box-2'></div>
                        </div>
                    </div>

                    <div className='dash-section-bottom'>
                        <div className='dash-box-bottom'></div>
                        <div className='dash-box-bottom'></div>
                        <div className='dash-box-bottom'></div>
                        <div className='dash-box-bottom'></div>

                    </div>


                </div>
            </div>
        </>
    )
}
