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
        <NavLink to="/" style={({ isActive }) => { return { color: isActive ? '#F1C40F' : '' } }}>Home</NavLink>
        <NavLink to="/aboutus" style={({ isActive }) => { return { color: isActive ? '#F1C40F' : '' } }}>About Us</NavLink>
        <NavLink to="/security" style={({ isActive }) => { return { color: isActive ? '#F1C40F' : '' } }}>Security</NavLink>
        <Link to="/login">Login</Link>
        <NavLink to="/signup" style={({ isActive }) => { return { color: isActive ? '#F1C40F' : '' } }}>Sign Up</NavLink>
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