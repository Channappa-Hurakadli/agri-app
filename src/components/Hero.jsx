//moving text


import React from 'react'

function Hero() {
  return (
    <div className='mb-5'>
      <section className="" style={{cursor:"pointer", border:"1px solid white",backgroundColor:"whitesmoke",paddingTop:"3px"}}>
      <marquee behavior="scroll" direction="left">
        Welcome to Agri Mitra - Your partner in agriculture solutions
      </marquee>
    </section>
    </div>
  )
}

export default Hero
