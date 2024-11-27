import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  const [bar, setBar] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/profileImg.webp");

  const handleClick = () => {
    setBar(!bar);
  }
  // Function to trigger the file input click
  const handleCameraClick = () => {
    document.getElementById('imageInput').click();
  }

  const handleInput = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }
  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
    // Cleanup function to dispose of tooltips
  // return () => {
  //   tooltips.forEach(tooltip => tooltip.dispose());
  // };
  }, []);





  return (
    <div className="profile-body bg-gradient">
      <div className="heading d-flex justify-content-between p-3 bg-gradient bg-body-tertiary">
        <i className="fa-solid fa-bars bar align-content-center" onClick={handleClick}></i>
        <h1 className="text-center head align-content-center text-start" >Profile</h1>
      </div>

      {/* navbar division */}
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
                <Link className="nav-link" to="/update"><i className="fa-solid fa-pen-to-square" ></i></Link>
            </li>
            {/* logout  */}
            <li className="nav-item">
                <Link className="nav-link" to=""><i className="fa-solid fa-right-from-bracket logout"></i></Link>
            </li>

            {/* settings */}
            <li className="nav-item">
              <Link className="nav-link" href="#"><i className="fa-solid fa-gear"></i></Link>
              </li>

          </ul>
        </nav>

        {/* profile image content */}
        <div className="profile-info mx-3 d-flex  flex-column">
          <div className="profile-img">
            <img src={selectedImage} alt="profile Image" className="border image " />
          </div>
          <i className="fa-solid fa-camera camera mb-3" onClick={handleCameraClick}></i>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: 'none' }} // Hide the file input
            onChange={handleInput}
          />
          <div className=" d-flex flex-column">
            <label htmlFor="name" className="text-start">Name : <span>Your name</span> </label>
            <br />
            <label htmlFor="email">Email : <span>Your Email</span> </label>
          </div>
        </div>

        {/* history content  */}
        <div className="history mx-3">
          history
        </div>

      </div>
    </div>
  )
}

export default Profile