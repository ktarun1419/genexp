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
            <section className='Feature'>
            <h2 className='feature_heading'><u>FEATURES</u></h2>
        <p className='feature_description'>Welcome Students and Recruiters we are here to connect you and 
            simplify the recruitment process. Want to recruit people we got
             you covered,want to apply for an opening we do that.</p>
             <div className='Card_container'>
             <div className='card_down'>
             <div className='Grey_box'>

                    </div>
                 <div className='White_box'>
                <h3>Automate your Placements</h3>
                <p>Now your Placement process is in safe hands. Just upload your documents and u will be provided with all the openings you are eligible for.</p>
                </div>
                </div>
            <div className='card_up'>
             <div className='Grey_box'>
                    </div>
                 <div className='White_box'>
                <h3 >Bookmark Your jobs</h3>
                <p>Too many job offers to manage, do not worry we have a solution. Bookmark the companies you want to apply for easier management.</p>
                </div>
                </div>
            <div className='card_down'>
             <div className='Grey_box'>
                    </div>
                 <div className='White_box'>
                <h3>Trust our Security</h3>
                <p>The data you upload is safe and secure with us thanks to the blockchain technology, so you can sleep soundly knowing your data is safe.</p>
                </div>
                </div>
             </div>
            
            </section>
        </>
    )
}
