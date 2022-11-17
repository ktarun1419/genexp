import React from 'react'
import { NavLink } from 'react-router-dom';
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

                            <NavLink to="/">
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
                            <a href="/">
                                <li>Log In</li>
                            </a>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
