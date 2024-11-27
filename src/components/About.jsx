import React, { forwardRef } from 'react'



const About = forwardRef((props,ref) =>{
    return (
        <div ref={ref} className="bg-body-tertiary" >
        <div className="about container p-5">
            <h1>About Us</h1>
               <div className="d-flex justify-content-around my-5 text-wrap ">
                    <div className="align-content-center about-content1">
                        <p>Welcome to our innovative platform dedicated to sustainable agriculture and advanced farming solutions.</p>
                        <p>Our mission is to empower farmers with data-driven insights to improve soil health, boost crop productivity, and ensure environmental sustainability</p>
                        <p>Leveraging machine learning models like Random Forest and SVM, we predict optimal crops based on soil parameters and climatic conditions.</p>
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
                    <p>Our system seamlessly integrates predictive analytics, real-time feedback, and user-friendly recommendations, making agriculture smarter and more efficient.</p>
                    <p>We strive to bridge the gap between technology and farming, fostering a future where technology meets sustainability.</p>
                    <p>Together, let’s cultivate a healthier planet, one crop at a time!</p>
                </div>
                
                
            </div>


            
        </div>
        </div>
    )
})

export default About
