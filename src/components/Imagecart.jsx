//moving text
import { useState } from "react";
import image1 from "../../public/crop1.jpg"
import image2 from "../../public/crop2.jpg"
import image3 from "../../public/crop3.jpg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// import React from 'react'

function Imagecart() {
    const img12=[{img:image3,label:"Acnsjnsk  sibskj ibkjs"},{img:image2,label:"Tt is label for image 2"},{img:image3,label:"it is label for the image 3"},{img:image1,label:"icnsjnsk  sibskj ibkjs"},{img:image1,label:"icnsjnsk  sibskj ibkjs"}];
    const[currentIndex,setCurrentIndex]=useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? img12.length - 2 : prevIndex - 1
      );
    };
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img12.length - 2 ? 0 : prevIndex + 1
      );
    };
   
  return (<>
    <div style={{overflow:"hidden",position:"relative",marginTop:"20px"}} className="container">
        <div style={{transform: `translateX(-${currentIndex * 102.7}%)`, display:"flex"}}>
        {
           img12.map((element, index) => (
            <>
            <div>
            <img style={{ flexShrink: 0 }} key={index} src={element.img} width={1320} height={350} alt={`Image ${index + 1}`} />
             {/* <div style={{height:"22px",backgroundColor:"#ECECEC"}}><marquee><p style={{color:"green"}}>{element.label}</p></marquee></div> */}
            </div>
           
            </> ))
            
        } 
        </div>
        
        <div style={{position:"absolute",top:0,width:"100%",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <span onClick={handlePrev} style={{color:"white",cursor:"pointer"}}><IoIosArrowBack size={55}/></span>
    <span onClick={handleNext} style={{color:"white",paddingRight:"10px",cursor:"pointer"}}><IoIosArrowForward size={55}/></span>
    </div>
    {/* <marquee>hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet placeat iusto!</marquee> */}
    </div>
    
    
    </>
  )
}

export default Imagecart
