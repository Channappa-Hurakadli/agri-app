import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden signup-body">

                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(120, 100%, 41%)' }}>
                                Krishi Sethu<br />
                                <span style={{ color: 'hsl(115, 44%, 11%)' }}>Welcomes You</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: 'hsla(222 94% 46% / 0.69)' }}>
                                Take advantage of AI-driven crop predictions, advanced analytics, and community insights. It’s easy and free to get started.
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass signup-box">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form>
                                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control bg-body-tertiary" />
                                                    <label className="form-label" htmlFor="form3Example1">Enter Your Name</label>
                                                </div>
                                            </div>

                                        </div>

                                        {/* <!-- Email input --> */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control bg-body-tertiary" />
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control bg-body-tertiary" />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                        </div>



                                        {/* <!-- Submit button --> */}
                                        <button type="button" formAction='submit' data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Sign up
                                        </button>


                                        {/* <!-- Register buttons --> */}
                                        <div className="text-center">
                                            <p>Already a member?<Link to="/login"> Login </Link>to explore your dashboard.</p>


                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabtabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Verify Your Email</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="" className="form-label">Enter the code sent to your email</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </div>
    )
}

export default Register