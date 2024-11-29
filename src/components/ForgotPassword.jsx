import React from 'react'

function ForgotPassword() {
    return (
        <div className="forgot-body">
            <div className='container d-flex justify-content-around align-items-center p-5 '>
                <h3>Forgot Password ?</h3>
                <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <div className="card bg-glass login-box">
                        <div className="card-body px-4 py-5 px-md-5">
                            <form>
                                {/* <!-- Email input --> */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="password" id="newPassword" className="form-control bg-body-tertiary" />
                                    <label className="form-label" htmlFor="newPassword">New Password</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="password" id="confirmPassword" className="form-control bg-body-tertiary" />
                                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                </div>



                                {/* <!-- Submit button --> */}
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ForgotPassword