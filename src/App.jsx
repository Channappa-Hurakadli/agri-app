import { useState,useRef} from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Carousel from '../src/components/Carousel';
import { Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  const sectionRef = useRef(null);

  const handleClick = () =>{
    console.log("Button clicked")
    sectionRef.current.scrollIntoView({behaviour:"smooth"})
  }

  return (
    // <Routes>
    <div className="app-container">
      <Navbar handleClick = {handleClick} />
      <Hero />
      <Carousel />
      <About ref={sectionRef}/>
      <footer className="app-footer">
        <p>&copy; 2023 Agri Mitra. All rights reserved.</p>
      </footer>
    </div>
    // {/* </Routes> */}
  );
}

export default App;