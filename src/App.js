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
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [showNav, setShowNav] = useState(true);  

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
          <Route exact path="/login" element={<Login funcNav={setShowNav}/>} />
          <Route exact path="/aboutus" element={<AboutUs funcNav={setShowNav}/>} />
          <Route exact path="/dashboard" element={<DashHome funcNav={setShowNav}/>} />
          <Route exact path="/offers" element={<Offers funcNav={setShowNav}/>} />
        </Routes>

        {showNav &&
          <footer>
            <Footer />
          </footer> }

      </Router>
      </>
    
  );
}

export default App;
