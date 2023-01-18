import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Offers.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unSetToken } from '../features/tokenSlice';
import { useGetProfileQuery } from '../services/authApi';

export default function Offers(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [settingsFullname,setsettingsFullname] = useState("")
    const token = useSelector(state => state.token.token)
    const {data, isSuccess} = useGetProfileQuery(token) 

    const dashLogout = () => {
        dispatch(unSetToken(null))
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        if (data && isSuccess) {
            setsettingsFullname(data.fullname)            
        }
      }, [data, isSuccess])

    props.funcNav(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    let profilename = "Your Name",
        profileimage = "/images/profile.png";
        let c1="Engineering"
        let p1="Senior Devops Engineer"
        let d1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    
        let careers_list=[{
            index:1,
            category:c1,
            position:p1,
            description:d1,
            location:"Banglore",
            package:"1-2lakh"
        },{
            index:2,
            category:c1,
            position:"Junior Devs Engineer",
            description:d1,
            location:"Banglore",
            package:"1-2lakh"
        },{
            index:3,
            category:c1,
            position:"Data Scientist",
            description:d1,
            location:"Banglore",
            package:"1-2lakh"
        },{
            index:4,
            category:c1,
            position:p1,
            description:d1,
            location:"Banglore",
            package:"1-2lakh"

        },{            index:5,
            category:c1,
            position:p1,
            description:d1,
            location:"Banglore",
            package:"1-2lakh"}]
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
                <h2>{settingsFullname}</h2>
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
                    <Link to="/settings"><span><ion-icon name="settings-outline"></ion-icon> </span></Link>
                        <Link to="/settings" id='Settings'>Settings</Link>
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
            <h1>OFFERS</h1>
            <Link to='/'><button onClick={dashLogout}>Logout</button></Link>
        </div>

        <div className='career_container'>
      <h1>
        Opportunities
      </h1>
      {careers_list.map((box)=>{
            return (    <div key={box.index} className='career_box'>
              <h2>{box.category}</h2>
              <h3>{box.position}</h3>
              <p>{box.description}</p>
              <div className='apply_box'>
                  <div className='location_box'>
                      <p>Location: {box.location}</p>
                      <p>Package: {box.package}</p>
                  </div>
                    <button className='apply_button'>Apply Now</button>
              </div>      
          </div>)
        })}
    </div>


    </div>
</div></>
  )
}
