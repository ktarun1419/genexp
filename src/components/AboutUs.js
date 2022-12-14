import React from 'react'
import "./AboutUs.css"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AboutUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (      
  <>
  <section className='abouttop'>
    <div className='about_main'>
      <div className='about_heading'>
        <h2 >ABOUT</h2>
      </div>
    <div className='Company_name'>
      <h2 >GENUINE EXPERIENCE</h2>
      </div>
     <div className='text_container'>
     <div className='about_text1'>
      <p className='about_text1_black'><b>We aim to provide common platform for all your internship/placement related work , expanding our 
      database as we progress.</b></p>
     <p className='about_text1_grey'> We designed our website in easy to use way with concern of personal data protection using
       blockchain technology . for more information see features page </p>
      </div>

       </div>
      </div> 
   
    
  </section>
  <section className='aboutbottom'>
    <h1 className='team_heading'><u>OUR TEAM</u></h1>
    <div className='team_container'>
      <div className='team_card'>
      <img className='team_member' src="images/avataar1.png" alt=""/>
      <p>Ansh Raj Sharma</p>
      </div>
      <div className='team_card'>
      <img className='team_member' src="images/avataar2.png" alt=""/>
      <p>Sajal Bansal</p>
      </div>
      <div className='team_card'>
      <img className='team_member' src="images/avataar3.png" alt=""/>
      <p>Nanakdeep Singh</p>
      </div>
      </div>
      <div className='team_container'>
      <div className='team_card'>
      <img className='team_member' src="images/avataar4.png" alt=""/>
      <p>Geetanshu Garg</p>
      </div>
      <div className='team_card'>
      <img className='team_member' src="images/avataar5.png" alt=""/>
      <p>Akshit Saini</p>
      </div>
      <div className='team_card'>
      <img className='team_member' src="images/avataar6.png" alt=""/>
      <p>Tarun Kaushik</p>
      </div>

    </div>
    
  </section>
  </>

  )
}

export default AboutUs