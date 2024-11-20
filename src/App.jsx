// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
// src/App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <footer className="app-footer">
        <p>&copy; 2023 Agri Mitra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;