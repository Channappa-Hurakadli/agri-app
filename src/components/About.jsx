import React, { forwardRef } from 'react'



const About = forwardRef((props,ref) =>{
    return (
        <div ref={ref} className="bg-body-tertiary" >
        <div className="about container p-5">
            <h1>About Us</h1>
               <div className="d-flex justify-content-around my-5 ">
                    <div className="align-content-center about-content1">
                        <p>This is about the about page.</p><p>This page provides information about our company, mission, and values.</p>
                        <p>Our mission is to provide the best possible experience for our customers.</p>
                        <p>Our values include innovation, quality, and customer satisfaction.</p>
                    </div>
                        <img src="abtIcon.webp" className='about-img w-25 h' alt="" />
                </div>
            {/* second paragraph  */}
            <div className="d-flex justify-content-around about-content2">
                <div >
                    <div className='flowchart-img'>
                        
                    </div>
                    <img src="flowchart.webp" className='about-flowchart w-75 h-75' alt="" />
                </div>
                <div className="align-content-around about-content2 mx-5">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium itaque laborum magnam reprehenderit quos explicabo quam id, hic dicta ipsam animi exercitationem?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium itaque laborum magnam reprehenderit quos explicabo quam id, hic dicta ipsam animi exercitationem?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium itaque laborum magnam reprehenderit quos explicabo quam id, hic dicta ipsam animi exercitationem?</p>
                </div>
                
                
            </div>


            
        </div>
        </div>
    )
})

export default About
