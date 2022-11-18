import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <div className='menu'>
                <nav>
                    <div className='left-side-menu'>
                        <div className='logo'>
                            <a href="/">
                                <h3>GENEXP</h3>
                            </a>
                        </div>
                        <div className='sub-menu'>

                            <NavLink to="/">
                                <li>HOME</li>
                            </NavLink>

                            <NavLink to="/aboutus">
                                <li>ABOUT US</li>
                            </NavLink>
                            
                            <NavLink to="/security">
                                <li>SECURITY</li>
                            </NavLink>

                            <NavLink to="/">
                                <li>CAREERS</li>
                            </NavLink>
                        </div>
                    </div>

                    <div className='right-side-menu'>
                        <div className="sub-menu">
                            <Link to="/login">
                                <li>Log In</li>
                            </Link>
                            <Link to="/signup" className='style-btn'><button>Sign Up</button></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
