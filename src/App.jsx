import { useState,useRef} from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Carousel from '../src/components/Carousel';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import LoginPage from './components/LoginPage';

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const serviceRef = useRef(null);

  const handleClick = (event,section) =>{
    event.preventDefault();
    console.log("Button clicked")
    if(section === "about")
      aboutRef.current.scrollIntoView({behavior:"smooth"})
    if(section === "contact")
      contactRef.current.scrollIntoView({behavior:"smooth"})
    if(section === "services")
      serviceRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="app-container">
      
      <Navbar handleClick = {handleClick} />
      {/* <div className="emptyArea position-sticky">
      </div> */}
      <Hero />
      {/* <div className="container"> */}
      <Carousel />
      <About ref={aboutRef}/>
      <Services ref={serviceRef}/>
      <Contact ref={contactRef}/>
      {/* </div> */}
      {/* <Routes>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes> */}
      <footer className="app-footer">
        <p>&copy; 2023 Agri Mitra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;