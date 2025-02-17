import { useState, useRef } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Carousel from '../src/components/Carousel';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import Input from './components/Input';
import Profile from './components/Profile';
import Update from './components/Update';
import ForgotPassword from './components/ForgotPassword';
import PageFooter from './components/PageFooter';
import Imagecart from './components/Imagecart';

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const serviceRef = useRef(null);
  const navigate = useNavigate()

  const handleClick = (event, section) => {
    event.preventDefault();
    navigate("/")
    if (section === "about")
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    if (section === "contact")
      contactRef.current.scrollIntoView({ behavior: "smooth" })
    if (section === "services")
      serviceRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="app-container">

      <Navbar handleClick={handleClick}/>

      {/* <div className="emptyArea ">
        </div> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<Register/>} />
        <Route path="/input" element={<Input />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route exact path="/" element={
          <>
            <Hero />
            <Imagecart/>
            <About ref={aboutRef} />
            <Services ref={serviceRef} />
            {/* <Contact ref={contactRef} /> */}
          </>
        } />
      </Routes>
      <footer className="app-footer">
        {/* <p>&copy; 2023 Agri Mitra. All rights reserved.</p> */}
        <PageFooter />
      </footer>
    </div>
  );
}

export default App;