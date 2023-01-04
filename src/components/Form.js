import React from 'react';
import './form.css'; 
// import { Link, useLocation } from "react-router-dom";
// import { useEffect } from 'react';


export default function Form() {
  // useEffect(() => { document.title = "GenExp | Sign Up"; }, []);
  //   const { pathname } = useLocation();
  return (
    <div className='screen'>
    <div className="formarea">
      <p> Applicant's Details </p>
      <form method = '' action = '' >
                <div className="formBox">                    
                    <input type="text" name='username' autoComplete='off' required placeholder='Username'/>
                </div>
                <div className="formBox">                    
                    <input type="text" name='fullname' autoComplete='off' required placeholder='Full Name'/>
                </div>
                <div className="formBox">                    
                    <input type="email" name='email' autoComplete='off' required placeholder='Email'/>
                </div>
                <div className="formBox">                    
                    <input type="password" name='password' autoComplete='off' required placeholder='Password'/>
                </div>
                <div className="formText">
                  <textarea placeholder='Description' name="Description" id="description" cols="30" rows="10"></textarea>
                </div>
                <div className="formBox">
                  <label>Upload Your CV </label>
                  <input type="file" name="file"  />
                </div>
                
      </form>
      <a href='/dashboard'>
        <input type="submit" value = "Apply Now" ></input>
      </a>
      {/* <Link to="/dashboard"><input type="submit" value="SIGN UP"/></Link> */}
    </div>
    </div>
  )
}



