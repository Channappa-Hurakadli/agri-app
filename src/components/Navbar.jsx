import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow bg-success-subtle p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="../icon.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={props.handleClick}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            
                        
                        </ul>
                        <ul className="d-flex gap-5 mt-2 ">
                        <i type="button" className="fa-solid fa-language fa-lg align-content-center"></i>
                        <i type="button" className="fa-solid fa-user fa-lg align-content-center"></i>
                        <button type="button" className="btn btn-primary align-content-center">login</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
