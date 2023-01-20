import React, { useEffect } from 'react';
import './Settings.css'; 
import { Link, useNavigate } from "react-router-dom";
import "./DashHome.css"
import { useDispatch } from 'react-redux';
import { unSetToken } from '../features/tokenSlice';
// import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { useGetProfileQuery, useUpdateProfileMutation } from '../services/authApi';


export default function Settings(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const dashLogout = () => {
        dispatch(unSetToken(null))
        localStorage.removeItem('token')
        navigate('/login')
    }
    props.funcNav(false);
    let profilename = "Your Name",
        profileimage = "/images/profile.png";

  // useEffect(() => { document.title = "GenExp | Sign Up"; }, []);
  //   const { pathname } = useLocation();

    const [settingsUsername,setsettingsUsername] = useState("")
    const [settingsFullname,setsettingsFullname] = useState("")
    const [fullname,setFullname] = useState("")
    const [cgpa,setcgpa] = useState("")
    const [settingsEmail,setsettingsEmail] = useState("")
    const [settingsBio,setsettingsBio] = useState("")
    const [status, setStatus] = useState("")

    let token = localStorage.getItem('token') 
    const {data, isSuccess} = useGetProfileQuery(token) 
    
    const [updateProfile] = useUpdateProfileMutation()


    useEffect(() => {
        if (data && isSuccess) {
            setsettingsUsername(data.username)
            setsettingsEmail(data.email)
            setsettingsFullname(data.fullname)
            setcgpa(data.cgp)
            setsettingsBio(data.bio)
        }
      }, [data, isSuccess])
    useEffect(() => {
        if (data && isSuccess) {
            setFullname(data.fullname)
            
        }
      }, [data, isSuccess])

    const updateProfileHandler = async (e) => {
        e.preventDefault();       
        const newEntry = {
            user: {
                fullname: settingsFullname,
                cgp: cgpa,
                bio: settingsBio                
            } ,
            token: token           
        }

        const response = await updateProfile(newEntry)
        if (response.data){
            setStatus("Data updated! Kindly Reload the page to see effect")
        }
        
        
    }

    

  return (
    <><div className='dashboard'>
    <div className='dash-nav'>
        <div className='dash-nav-header'>
            <h2>GENEXP</h2>
        </div>
        <div className='dash-nav-options'>
            <div className='dash-profile-pic'>
                <img src={profileimage} alt="" />
            </div>

            <div className='dash-nav-user'>
                <h2>{fullname}</h2>
                <p>Student</p>
            </div>

            <div className='dash-nav-menus'>
                <ul>
                    <li>
                    <Link to="/dashboard"><span><ion-icon name="home-outline"></ion-icon></span></Link>
                        <Link to="/dashboard" id='home'> Home</Link>
                    </li>
                    <li>
                    <Link to="/offers"><span><ion-icon name="laptop-outline"></ion-icon> </span></Link>
                        <Link to="/offers" id='offer'>Offers</Link>
                    </li>
                    <li>
                    <Link to="/settings"><span><ion-icon name="settings-outline"></ion-icon></span></Link>
                        <Link to="/settings" id='settings'> Settings</Link>
                    </li>

                </ul>
            </div>

        </div>

        <div className='dash-nav-footer'>
            <div>
                <p>Making Recruitment Experience Better</p>
            </div>
        </div>



    </div>

    <div className='dash-right'>
        <div className='dash-right-header'>
            <h1>SETTINGS</h1>
            <Link to='/'><button onClick={dashLogout}>Logout</button></Link>
        </div>
    <div className='screen'>
    <div className = "right-section">

   
    <form  method = '' action = '' onSubmit={updateProfileHandler}>
                <div className="formBox">                    
                    <input type="text" name='username' value = {settingsUsername} disabled autoComplete='off' required placeholder='Username'/>
                </div>
                <div className="formBox">                    
                    <input type="email" name='email' value = {settingsEmail} disabled autoComplete='off' required placeholder='Email'/>
                </div>
                <div className="formBox">                    
                    <input type="text" name='fullname' value = {settingsFullname} onChange = {(e) => setsettingsFullname(e.target.value)}  autoComplete='off' required placeholder='Full Name'/>
                </div>
                <div className="formBox">                    
                    <input type="number" name='cgpa' value = {cgpa} autoComplete='off'  onChange = {(e) => setcgpa(e.target.value)} required placeholder='CGPA'/>
                </div>
               
                <div className="formText">
                  <textarea placeholder='Bio' value = {settingsBio}  onChange = {(e) => setsettingsBio(e.target.value)} name="Bio" id="bio" cols="30" rows="10"></textarea>
                </div>
                {status ? <div style={{color:'green', fontSize: 20, marginTop:'5%', marginLeft:'5%', marginRight:"5%", textAlign:'center'}}><span ><ion-icon name="checkmark-done-circle-outline"></ion-icon></span> {status}</div> : ""}
      
                <button className='settings-button' style={{marginTop: "3rem"}}  type="submit">UPDATE</button>
                
      </form>
            
    </div>
    </div>

        


    </div>
</div></>
  )
}



