import React from 'react';
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
      <div>

      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden login-body">
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
              <div className="row gx-lg-5 align-items-center mb-5">
                  <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                      <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(115, 44%, 11%)' }} >
                          Welcome Back to<br />
                          <span style={{color: 'hsl(120, 100%, 38%)' }}>Krishi Sethu!!</span>
                      </h1>
                      <p className="mb-4 opacity-70" style={{ color: 'hsla(222 94% 46% / 0.69)' }}>
                      Reconnect with your personalized crop management insights. Sign in and continue making informed agricultural decisions.
                      </p>
                  </div>

                  <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                      <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                      <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                      <div className="card bg-glass login-box">
                          <div className="card-body px-4 py-5 px-md-5">
                              <form>
                                  {/* <!-- Email input --> */}
                                  <div data-mdb-input-init className="form-outline mb-4">
                                      <input type="email" id="form3Example3" className="form-control bg-body-tertiary" />
                                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                                  </div>

                                  {/* <!-- Password input --> */}
                                  <div data-mdb-input-init className="form-outline mb-4">
                                      <input type="password" id="form3Example4" className="form-control bg-body-tertiary" />
                                      <label className="form-label" htmlFor="form3Example4">Password</label>
                                      <Link className="d-block" to="/forgotpassword">forgot password?</Link>

                                  </div>

                                 

                                  {/* <!-- Submit button --> */}
                                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                      Login
                                  </button>


                                  {/* <!-- Register buttons --> */}
                                  <div className="text-center">
                                      <p>Don’t have an account yet?</p>
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