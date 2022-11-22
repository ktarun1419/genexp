import React from 'react'
import { Link } from "react-router-dom";
import "./Offers.css"

export default function Offers() {
    let profilename = "Your Name",
        profileimage = "/images/profile.png";
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
            <h1>OFFERS</h1>
            <Link to='/'><button>Logout</button></Link>
        </div>

        


    </div>
</div></>
  )
}
