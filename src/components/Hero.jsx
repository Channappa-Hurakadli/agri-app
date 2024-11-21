//moving text


import React from 'react'

function Hero() {
  return (
    <div>
      <section className="hero-section">
      <marquee behavior="scroll" direction="left">
        Welcome to Agri Mitra - Your partner in agriculture solutions
      </marquee>
    </section>
    </div>
  )
}

export default Hero
