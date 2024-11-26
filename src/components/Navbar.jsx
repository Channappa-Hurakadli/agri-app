import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow bg-success-subtle">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://cdn-icons-png.flaticon.com/512/500/500477.png" className="icon" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mx-5 navbar-txt">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={(evt) => props.handleClick(evt, "about")}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={(evt) => props.handleClick(evt, "services")} to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={(evt) => props.handleClick(evt, "contact")} to="/">Contact</Link>
                            </li>


                        </ul>
                        <ul className="d-flex gap-5 mt-2 mx-5">
                            {/* input panel icon*/}
                            <Link to="/input"><img src="/public/panelicon.webp" alt="" className='panel' /></Link>

                            {/* profile icon */}
                            <Link to="/profile"><i type="button" className="fa-solid fa-user fa-lg align-content-center"></i></Link>

                            {/* language icon  */}
                            <i type="button" className="fa-solid fa-language fa-lg align-content-center"></i>

                            {/* login button */}
                            <Link to="/login"><button type="button" className="btn btn-primary align-content-center">Login</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar