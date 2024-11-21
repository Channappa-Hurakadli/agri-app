import React, { forwardRef } from 'react'



const About = forwardRef((props,ref) =>{
    return (
        <div ref={ref}>
            <h1>About Us</h1>
               <div>
                {/* first paragrap  */}
                <div>
                    <p>This is about the about page.</p><p>This page provides information about our company, mission, and values.</p>
                    <p>Our mission is to provide the best possible experience for our customers.</p>
                    <p>Our values include innovation, quality, and customer satisfaction.</p>
                </div>
                {/* image section  */}
                <div>
                     <img src='' alt=''/>
                </div>
            </div>
            {/* second paragraph  */}
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laudantium itaque laborum magnam reprehenderit quos explicabo quam id, hic dicta ipsam animi exercitationem?</p>
            </div>


            
        </div>
    )
})

export default About
