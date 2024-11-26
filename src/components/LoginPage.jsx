import React from 'react';
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
      <div>

      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden">
          <style>
              {`
                  .container{
                      background-image:url("https://img.freepik.com/premium-photo/tree-with-soil-growing-converging-point-computer-circuit-board-blue-light-wireframe-network-background-green-computing-green-technology_35691-13172.jpg");
                      background-size: cover;
                      background-repeat: no-repeat;
                      
                      
                      }

                  .bg-glass {
                      background-color: hsla(0, 0%, 100%, 0.5) !important; 
                      backdrop-filter: saturate(200%) blur(25px);
                      
                      
                  }
              `}
          </style>

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

                      <div className="card bg-glass">
                          <div className="card-body px-4 py-5 px-md-5">
                              <form>
                                  {/* <!-- Email input --> */}
                                  <div data-mdb-input-init className="form-outline mb-4">
                                      <input type="email" id="form3Example3" className="form-control" />
                                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                                  </div>

                                  {/* <!-- Password input --> */}
                                  <div data-mdb-input-init className="form-outline mb-4">
                                      <input type="password" id="form3Example4" className="form-control" />
                                      <label className="form-label" htmlFor="form3Example4">Password</label>
                                  </div>

                                 

                                  {/* <!-- Submit button --> */}
                                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                      Login
                                  </button>

                                  {/* <!-- Register buttons --> */}
                                  <div className="text-center">
                                      <p>Don't have an account?</p>
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