import React, { useState } from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export default function NavBarCheck() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="Navbar">
      <span className="nav-logo">GENEXP</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/security">Security</NavLink>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </>
  )
}