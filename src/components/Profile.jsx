import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  const [bar, setBar] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/profileImg.webp");
  const queries = [{ query: "1st query", date: "12-09-2024" }, { query: "2nd query", date: "12-09-2024" }, { query: "3rd query", date: "12-09-2024" }]

  const details = { name: "User name", email: "user email" }

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

      <div className="profile d-flex justify-content-between">
        {/* navbar division */}
        <nav className={`navbar bg-body-secondary  ${bar ? 'show' : ''} profile-navbar`}>
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
              {/* content  */}
              <div className="offcanvas-body p-3">

                <div className="mb-3 mt-3">
                  <label htmlhtmlFor="exampleFormControlInput1" className="form-label">Enter Your Email Adress</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className='mb-3'>
                  <label htmlhtmlFor="mobile" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="mobile" placeholder="Enter Your Phone Number" />
                </div>
                <div className="mb-3">
                  <label htmlhtmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Query</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" minLength={25} ></textarea>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>

              </div>
            </div>

            {/* edit  */}
            {/* <!-- Button trigger modal --> */}
            <li className="nav-item">
              <Link className="nav-link" to=""><i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i></Link>
            </li>


            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body modal-dialog-scrollable">
                    <div className="mb-3">
                      <label htmlFor="changename" className="form-label">Enter Your Name</label>
                      <input type="text" className="form-control" id="changename" placeholder="Enter The New Name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="changeimage" className="form-label">Choose Profile Image</label>
                      <br />
                      <input type="file" className="form-control" id="changeimage" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>
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
            <label htmlhtmlFor="name" className="text-start">Name : <span>{details.name}</span> </label>
            <br />
            <label htmlhtmlFor="email">Email : <span>{details.email}</span> </label>
          </div>
        </div>

        {/* history content  */}
        <div className="history mx-3 align-items-start p-5">
          <h3 className="text-center mb-5">Your Queries</h3>
          {queries.map((query) => {
            return (
              <div className="card w-75 mb-3" key={query.id}>
                <div className="card-body query-card">
                  <h5 className="card-title">{query.query}</h5>
                  <p className="card-text">{query.date}</p>
                  {/* <a href="#" className="btn btn-primary">Button</a> */}
                </div>
              </div>

            );
          })}

        </div>

      </div>
    </div>
  )
}

export default Profile