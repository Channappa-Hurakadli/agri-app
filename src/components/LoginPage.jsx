import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import summary from '../helper/summary';
import axios from "axios"
import {toast} from "react-toastify"

function LoginPage() {
    const[userDetail,setuserDetails]=useState({
        email:"",
        password:""
    });
    const history=useNavigate();
    const handleOnchange=(e)=>
    {
        setuserDetails({...userDetail,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>
    {
        console.log(userDetail);
        e.preventDefault();
        const response = await axios({
            method: summary.login.method, 
            url: summary.login.url, 
            headers: {
                "Content-Type": "application/json", 
            },
            withCredentials: true, 
            data:JSON.stringify(userDetail)
        })
        // const logindata=await fetch(summary.login.url,{
        //     method:summary.login.method,
        //     headers:{
        //         'Content-Type': 'application/json',
        //         credentials: 'include'
        //     },
        //     body:JSON.stringify(userDetail)

            
        // })
        
        console.log(response.data);
        if(response?.data?.success==true)
        {
            toast.success(response?.data?.mess);
            history("/");

        }
        else 
        {
            toast.error(response?.data?.mess);
            history("/signup");
        }


    }
    return (
      <div>

      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden" style={{backgroundImage:`url("https://img.freepik.com/premium-photo/tree-with-soil-growing-converging-point-computer-circuit-board-blue-light-wireframe-network-background-green-computing-green-technology_35691-13172.jpg")`
        ,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"
      }}>
          
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
              <div className="row gx-lg-5 align-items-center mb-5">
                  <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                      <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                          The best offer <br />
                          <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
                      </h1>
                      <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                          Temporibus, expedita iusto veniam atque, magni tempora mollitia
                          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                          ab ipsum nisi dolorem modi. Quos?
                      </p>
                  </div>

                  <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                      <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                      <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                      <div className="card bg-glass" style={{backgroundColor:"hsla(0, 0%, 100%, 0.5) !important",backdropFilter:"saturate(200%) blur(25px)"}}>
                          <div className="card-body px-4 py-5 px-md-5">
                              <form>
                                  {/* <!-- Email input --> */}
                                  <div data-mdb-input-init className="form-outline mb-4">
                                      <input type="email" name="email" value={userDetail.email} onChange={handleOnchange} id="form3Example3" className="form-control" />
                                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                                  </div>

                                  {/* <!-- Password input --> */}
                                  <div data-mdb-input-init className="form-outline mb-4">
                                      <input type="password" name='password' value={userDetail.password} onChange={handleOnchange} id="form3Example4" className="form-control" />
                                      <label className="form-label" htmlFor="form3Example4">Password</label>
                                  </div>

                                 

                                  {/* <!-- Submit button --> */}
                                  <button onClick={handleSubmit}  data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                      Login
                                  </button>

                                  {/* <!-- Register buttons --> */}
                                  <div className="text-center">
                                      <p>Dont have an account?</p>
                                      <Link to="/signup">Sign Up</Link>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* <!-- Section: Design Block --> */}
  </div>
    )
}

export default LoginPage