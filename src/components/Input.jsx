import axios from 'axios';
import React, { useEffect, useState } from 'react'
import summary from '../helper/summary';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Input() {
  const navigate=useNavigate();
  const [prediction,setPrediction]=useState("");
  const[soilDetail,setSoilDetail]=useState({
    nitrogen:0,
    phosphorus:0,
    potassium:0,
    temperature:0,
    humidity:0,
    ph:0,
    rainfall:0
  })
  const userDetail=async()=>
    {
        const userData=await axios({
                method:summary.userDetails.method,
                url:summary.userDetails.url,
                headers: {
                    "Content-Type": "application/json", 
                },
                withCredentials: true} )
        
        // console.log(data1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        if(userData?.data?.error==true)
        {
           navigate('/login');
           return;
           
        }
      }
  // nitrogen,potassium,phosphorus,temperature,humidity,ph,rainfall
  // const handleOnchange=(e)=>
  // {
  //   setSoilDetail({...soilDetail,[e.target.name]:e.target.value});
  // }
  const handlePrediction=async()=>
  {
      const predictionResponse=await axios({
        url:summary.prediction.url,
        method:summary.prediction.method,
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true, 
        data:JSON.stringify(soilDetail) })
        // console.log("prediction : ",predictionResponse);
        setPrediction(predictionResponse?.data?.prediction)
  }
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    
    // List of fields that should be parsed as numbers (including NPK values)
    const numericFields = ["nitrogen", "phosphorus", "potassium", "temperature", "ph", "rainfall"];
  
    // Check if the field is in the numericFields list and parse accordingly
    const updatedValue = numericFields.includes(name) ? parseFloat(value) : value;
    // console.log(updatedValue,name)
  
    setSoilDetail({ ...soilDetail, [name]: updatedValue });

  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on submit
    
    try {
      // Send a POST request to the API with soilDetail as payload
      const response = await axios({
        method: summary.storeSoilDetails.method,
        url: summary.storeSoilDetails.url,
        headers: {
          "Content-Type": "application/json", 
        },
        data: JSON.stringify(soilDetail),  // Correctly passing data
        withCredentials: true,  // Optionally, if cookies are involved
      });

      // console.log(response);
      handlePrediction();
      if(response?.data?.success)
      {
        toast(response?.data?.message)
        setSoilDetail({
          nitrogen: 0,
          phosphorus: 0,
          potassium: 0,
          temperature: 0,
          humidity: 0,
          ph: 0,
          rainfall: 0,
        });
      };
      
      // Handle response here (e.g., show a success message or clear the form)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally handle error response (show error message)
    }
  }
  useEffect(()=>
  {
    userDetail();
  })
  return (
    <div>
        <h1 className="mt-5 text-center">Enter the soil details</h1>
    <div className="bg-body-secondary">
      <div className='container input-cont m-5 p-3'>
        <div className="d-flex justify-content-center align-content-center p-5 mx-5">
          <form action="" className="justify-content-center ">
            <div className="form-group container row">
              <div className='d-flex mb-2'>
                <label htmlFor="nitrogen" className="col-sm-2 col-form-label">N (Nitrogen) : </label>
                <input  className="form-control1" type="number" name="nitrogen" value={soilDetail.nitrogen} onChange={handleOnchange} id='nitrogen'  /> %
              </div>
              <div className='d-flex mb-2'>
                <label htmlFor="phosphorous" className="col-sm-2 col-form-label">P (Phosphorous) : </label>
                <input  className="form-control1" type="number" id='phosphorous' name='phosphorus' value={soilDetail.phosphorus} onChange={handleOnchange}/> %
              </div>
              <div className='d-flex mb-2'>
                <label htmlFor="potassium" className="col-sm-2 col-form-label">K (Potassium) : </label>
                <input  className="form-control1" type="number" id='potassium' name='potassium' value={soilDetail.potassium} onChange={handleOnchange} /> %
              </div>
              <div className='d-flex mb-2'>
                <label htmlFor="temperature" className="col-sm-2 col-form-label">Temperature : </label>
                <input  className="form-control1" type="number" id='temperature' name='temperature' value={soilDetail.temperature} onChange={handleOnchange} /> &deg;C
              </div>
              <div className='d-flex mb-2'>
                <label htmlFor="humidity" className="col-sm-2 col-form-label">Humidity : </label>
                <input  className="form-control1" type="number" id='humidity' name='humidity' value={soilDetail.humidity} onChange={handleOnchange} /> %
              </div>
              <div className='d-flex mb-2'>
                <label htmlFor="ph" className="col-sm-2 col-form-label">pH : </label>
                <input  className="form-control1" type="number" id='ph' name='ph' value={soilDetail.ph} onChange={handleOnchange} /> mm
              </div>
              <div className='d-flex mb-2'>
                <label htmlFor="rainfall" className="col-sm-2 col-form-label">Rainfall  : </label>
                <input  className="form-control1" type="number" id='rainfall' name='rainfall' value={soilDetail.rainfall} onChange={handleOnchange} /> mm
              </div>
              <div className='mt-5'>
                <button onClick={handleSubmit} type="button" className="btn btn-outline-success">Submit</button>
              </div>
            </div>
          </form>
       
        </div>
         <div style={{fontWeight:"bold"}}>
          prediction Result : {prediction}
        </div>

      </div>
      </div>
    </div>
  )
}

export default Input