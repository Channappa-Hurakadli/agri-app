import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Update() {
    const [viewName, setViewName] = useState(false)
    const [viewPassword, setViewPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bar, setBar] = useState(false);
    const handleClickBar = () => {
        setBar(!bar);
    }


    const handleCick = (element) => {
        if (element === 'name') {
            setViewName(!viewName)
        }
        if (element === 'password')
            setViewPassword(!viewPassword)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleReset = (element) => {
        if (element === 'name') {
            setFirstName('');
            setLastName('');
            setEmail('');
        } else if (element === 'password') {
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    }

    return (
        <div className='update-body'>
            <div className="heading d-flex justify-content-between p-3 bg-gradient bg-body-tertiary">
                <i className="fa-solid fa-bars bar align-content-center" onClick={handleClickBar}></i>
                <h1 className='text-center mb-3 bg-body-tertiary p-3 mt-1 text-start head'>Update Profile</h1>
            </div>
            <div className="profile d-flex justify-content-between">
                <nav className={`navbar justify-content-start border bg-body-secondary align-content-start ${bar ? 'show' : ''} profile-navbar`}>
                    <ul className="nav flex-column">
                        {/* query */}
                        <li className="nav-item">
                            <Link className="nav-link active" href="#" ><i className="fa-solid fa-clipboard-question " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ></i></Link>
                        </li>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel">Ask Query</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body p-3">

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Share Your Query</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>

                            </div>
                        </div>

                        {/* edit  */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/update"><i className="fa-solid fa-pen-to-square"></i></Link>
                        </li>
                        {/* logout */}
                        <li className="nav-item">
                            <Link className="nav-link logout" to=""><i className="fa-solid fa-right-from-bracket"></i></Link>
                        </li>

                        {/* settings */}
                        <li className="nav-item">
                            <Link className="nav-link" href="#"><i className="fa-solid fa-gear"></i></Link>
                        </li>

                    </ul>
                </nav>
                <div className="container p-5">
                    <span onClick={() => { handleCick('name') }}><h3 className="my-3">Edit Your Personal Details</h3></span>
                    <div className="row g-3 mt-3 container update-name my-5 " style={{ display: viewName ? 'block' : 'none' }}>
                        <div className="col">
                            <input type="text" className="form-control " placeholder="First name" aria-label="First name" value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Enter your email" aria-label="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success mx-2">Save</button>
                            <button type="button" className="btn btn-outline-danger" onClick={() => { handleReset('name') }}>Reset</button>
                        </div>
                    </div>
                    {/* update password  */}
                    <span onClick={() => { handleCick('password') }}><h3>Update Password</h3></span>
                    <div className="row g-3 mt-3 container update-name " style={{ display: viewPassword ? 'block' : 'none' }}>
                        <div className="col input-group">
                            <input type={showPassword ? "text" : "password"} className="form-control " placeholder="Enter Your Current Password" aria-label="Current Password" value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)} />
                            <i className="fa-solid fa-eye-slash input-group-text align-content-center" onClick={handleShowPassword}></i>
                        </div>
                        <div className="col input-group">
                            <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter New Password" aria-label="Enter new password" value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)} />
                            <i className="fa-solid fa-eye-slash input-group-text align-content-center" onClick={handleShowPassword}></i>

                        </div>
                        <div className="col input-group">
                            <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Confirm New Password" aria-label="Confirm New Password" value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <i className="fa-solid fa-eye-slash input-group-text align-content-center" onClick={handleShowPassword}></i>

                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success mx-2">Save</button>
                            <button type="button" className="btn btn-outline-danger" onClick={() => { handleReset('password') }} disabled={newPassword != confirmPassword ? true : false}>Reset</button>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Update