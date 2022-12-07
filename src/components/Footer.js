import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
function Footer() {
  return (
    <>
    <div className='Box'>
      
      <div className='Element1'>
          <h3>ABOUT GENEXP</h3>
          <p><b>Vision:</b> We aim to provide common platform for all your internship/placement related work.<br/><b>Product: </b>We designed our website in easy to use way with concern of personal data protection using blockchain technology.</p>
          
      </div>
        
      <div className='Element'>
          <h3>Quick Links</h3>
          <Link to='/login'>Login<br/></Link>
          <a href='\'>Start Hiring<br/></a>
          <Link to='/signup'>Sign up<br/></Link>
          <Link to='/offers'>Job Openings<br/></Link>
      </div>
      <div className='Element'>
          <h3>Resources</h3>
          <Link to='/security'>Security<br/></Link>
          <a href='\'>CDGC<br/></a>
          <a href='\'>PEC<br/></a>
          <Link to='/aboutus'>About Us<br/></Link>
      </div>
      
  </div>
</>
      )
}

export default Footer
