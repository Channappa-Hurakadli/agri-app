import React, { useEffect, useState } from 'react';
import './Features.css';

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "path_to_image1.jpg",
    "path_to_image2.jpg",
    "path_to_image3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="features-section">
      <h3>Features</h3>
      <div className="slideshow-container">
        {slides.map((src, index) => (
          <div className={`mySlides fade ${index === currentSlide ? "active" : ""}`} key={index}>
            <img src={src} alt={`Feature ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;