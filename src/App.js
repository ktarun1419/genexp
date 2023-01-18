import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Security from './components/Security';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import DashHome from './components/DashHome';
import Offers from './components/Offers';
import Settings from './components/Settings';
import { useState} from 'react';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,  
} from "react-router-dom";

function App() {
  
  const [showNav, setShowNav] = useState(true);
  const token = useSelector(state => state.token.token)
  
  return (
    <>
      <Router>
        {showNav &&
          <nav>
            <Navbar />
          </nav>
        }     

        <Routes>
          <Route exact path="/" element={<Home funcNav={setShowNav}/>} />
          <Route exact path="/security" element={<Security funcNav={setShowNav}/>} />
          <Route exact path="/signup" element={<SignUp funcNav={setShowNav}/>} />
          <Route exact path="/login" element={!token ?<Login funcNav={setShowNav}/> : <Navigate to='/dashboard'/>} />
          <Route exact path="/aboutus" element={<AboutUs funcNav={setShowNav}/>} />
          <Route exact path="/dashboard" element={token ? <DashHome funcNav={setShowNav}/> : <Navigate to='/login'/>}/>  
          <Route exact path="/offers" element={token ?<Offers funcNav={setShowNav}/>: <Navigate to='/login'/>} />          
          <Route exact path="/settings" element={<Settings funcNav={setShowNav}/>} />        

        </Routes>
        
        {showNav &&
          <footer>
            <Footer />
          </footer> }
      </Router>
    {/* <Form/> */}
    </>
    
    
  );
}

export default App;
