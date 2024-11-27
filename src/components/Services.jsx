import React, { forwardRef } from 'react'

const Services= forwardRef((props,ref)=> {
  return (
    <div ref={ref} className="services">
        <div className="p-5 container ">
      <h1>Services</h1>
      <ul className="mt-5">
        <li><b>Crop Prediction & Insights</b></li>
        <p>Utilizing advanced machine learning models, we provide accurate crop yield predictions and farming insights.</p>
        <li><b>Real-Time Weather Updates</b></li>
        <p>Stay informed with precise weather data to optimize your agricultural activities.</p>
        <li><b>Soil Health Analysis</b></li>
        <p>Understand your soil's nutrient levels with data-driven reports to enhance productivity.</p>
        <li><b>Smart Farming Recommendations</b></li>
        <p>Personalized farming techniques based on your field's data, ensuring sustainable and efficient practices.</p>
        <li><b>Data-Driven Decision Support</b></li>
        <p>A user-friendly dashboard to help you make informed decisions for better outcomes.</p>
      </ul>
    </div>
    </div>
  )
})

export default Services
