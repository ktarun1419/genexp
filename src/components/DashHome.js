import React from 'react'
import { Link } from "react-router-dom";
import "./DashHome.css"

export default function DashHome(props) {
    props.funcNav(false);
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
                                    <span><ion-icon name="home-outline"></ion-icon></span>
                                    <Link to="/dashboard"> Home</Link>
                                </li>
                                <li>
                                    <span><ion-icon name="laptop-outline"></ion-icon> </span>
                                    <Link to="/offers">Offers</Link>
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
                        <Link to='/'><button>Logout</button></Link>
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
