//slideshow

import React, { useState, useEffect } from 'react'

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { img: "crop1.jpg", label: "First slide label", caption: "Some representative placeholder content for the first slide." },
        { img: "crop2.jpg", label: "Second slide label", caption: "Some representative placeholder content for the second slide." },
        { img: "crop3.jpg", label: "Third slide label", caption: "Some representative placeholder content for the third slide." },
    ];
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        },3000)
        return () => clearInterval(interval); // Cleanup interval on component unmount
    },[])

    return (
        <div className='container carousel p-5 mb-5'>
            <h1>Spotlights</h1>
             <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={currentIndex === index ? "active" : ""}
                            aria-current={currentIndex === index}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div key={index} className={`carousel-item ${currentIndex === index ? "active" : ""}`}>
                            <img src={slide.img} width={500} className="d-block w-100" alt={`image${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{slide.label}</h5>
                                <p>{slide.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
