import React from 'react'
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
                            <a href="/">
                                <li>HOME</li>
                            </a>
                            <a href="/">
                                <li>ABOUT US</li>
                            </a>
                            <a href="/">
                                <li>SECURITY</li>
                            </a>
                            <a href="/">
                                <li>CAREERS</li>
                            </a>
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
