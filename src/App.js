import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Security from './components/Security';
import SignUp from './components/SignUp';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/security" element={<Security />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
