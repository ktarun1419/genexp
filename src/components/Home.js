import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className='main-hero-section'>
                <div className="hero-left-side">
                    <h1>GENUINE EXPERIENCE</h1>
                    <p>
                        Making Recruitment Experience Better
                    </p>
                    <div class="button-group">
                        <Link to="/signup" ><button>Get Started</button></Link>
                    </div>
                </div>


                <div class="hero-right-side">
                    <img src="images/office.jpg" alt="office" />
                </div>

            </section>
        </>
    )
}
