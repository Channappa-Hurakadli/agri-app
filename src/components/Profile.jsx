import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import summary from "../helper/summary"
import { FaCamera } from "react-icons/fa";

function Profile() {
  const [bar, setBar] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/profileImg.webp");
  const navigate=useNavigate();
  const [eries1,setQueries1]=useState([]);
  const queries = [{ query1: "1st query", date: "12-09-2024" }, { query1: "2nd query", date: "12-09-2024" }, { query1: "3rd query", date: "12-09-2024" }]
  const[user,setUser]=useState(
    {
      name:"user name",
      email:"user email",
      role:"user role",
      Image_url:""
    }
  )

  const[queryDel,setQueryDel]=useState(
    {
      email:"",
      phone:"",
      suggestInfo:""
    }
  )
  //function for ftching the user detail
  const userDetail=async()=>
    {
        const userData=await axios({
                method:summary.userDetails.method,
                url:summary.userDetails.url,
                headers: {
                    "Content-Type": "application/json", 
                },
                withCredentials: true} )
        
        // console.log(data1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        if(userData?.data?.error==true)
        {
           navigate('/login');
           return;
           
        }
        const data1=userData?.data?.data;
        setUser({name:data1?.name,email:data1?.email,
            role:data1?.role,Image_url:data1?.Image_url });
        if (user?.Image_url) {
          setSelectedImage(user?.Image_url);
        }
    }
    //function for fetching individual query
    const individualQuery=async()=>
      {
        const query=await axios({
          method:summary.getIndQuer.method,
          url:summary.getIndQuer.url,
          headers: {
            "Content-Type": "application/json", 
        },
        withCredentials: true,
        data:JSON.stringify({email:user?.email})
        })
        // console.log(query);
        if(query.data?.error)
        {
          console.log();
        }
        else{
          setQueries1(query?.data?.data);
        }
       

      } 

    useEffect(()=>
    {
      userDetail();
      individualQuery();
    },[user])

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
  const handleOnChange1=(e)=>
  {
    setQueryDel({...queryDel,[e.target.name]:e.target.value});
  }
  const handleQuerySubmit=async()=>
  {
    const response=await axios(
      {
        method:summary.queryStore.method,
        url:summary.queryStore.url,
        headers: {
          "Content-Type": "application/json", 
      },
      withCredentials: true,
      data:JSON.stringify(queryDel)

      }
    )
    const offcanvasElement = document.querySelector("#offcanvasRight");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance.hide();
    console.log(response);
  }





  return (
    <div className="profile-body bg-gradient">
      <div className="heading d-flex justify-content-between p-3 bg-gradient bg-body-tertiary">
        <i className="fa-solid fa-bars bar align-content-center" onClick={handleClick}></i>
        <h1 className="text-center head align-content-center text-start" >Profile</h1>
      </div>

      <div className="profile d-flex">
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
              <div className="offcanvas-body p-3" id="offcanvasRight">

                <div className="mb-3 mt-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Email Adress</label>
                  <input type="email" name='email' value={queryDel.email} onChange={handleOnChange1} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className='mb-3'>
                  <label htmlFor="mobile" className="form-label">Phone Number</label>
                  <input type="text" name='phone' value={queryDel.phone} onChange={handleOnChange1} className="form-control" id="mobile" placeholder="Enter Your Phone Number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Query</label>
                  <textarea className="form-control" name='suggestInfo' value={queryDel.suggestInfo} onChange={handleOnChange1} id="exampleFormControlTextarea1" rows="3" minLength={25} ></textarea>
                </div>
                <button onClick={handleQuerySubmit} type="submit" className="btn btn-success">Submit</button>

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
        {/* profile-info */}
        <div className=" mx-3 my-3 d-flex  flex-column " style={{width:"400px",height:"662px",backgroundColor:"#ACDF87",paddingTop:"15px", paddingLeft:"20px",paddingRight:"15px"}}>
          <div className="profile-img" style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <img src={selectedImage} alt="profile Image" className="border image " />
          </div>
          {/* <i style={{position:"relative",bottom:"18px"}} className="fa-solid fa-camera camera mb-3" onClick={handleCameraClick}></i> */}
          <FaCamera size={25} style={{position:"relative",bottom:"46px",left:"168px"}} onClick={handleCameraClick}/>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: 'none' }} // Hide the file input
            onChange={handleInput}
          />
          <div className=" d-flex flex-column gap-2">
            <label htmlFor="name" className='d-flex'><div style={{width:"70px"}}>Name : </div><div>{user?.name}</div> </label>
            <label htmlFor="email" className='d-flex'><div style={{width:"70px"}}>Email :</div> <div>{user?.email}</div> </label>
            <label htmlFor="role" className='d-flex'><div style={{width:"70px"}}>Role :</div> <div>{user?.role}</div> </label>
          </div>
          <div className='mt-10' style={{marginTop:"30px"}}>
          <div style={{fontWeight:"bold",padding:"10px 30px"}}>Don't go where the path may lead, go instead where there is no path and leave a trail." — Ralph Waldo Emerson</div>
<div>Emerson encourages students to be bold and original in their thinking. Don’t just follow the crowd—create your own path and make your own mark.</div>

          </div>
        </div>

        {/* history content  */}
        <div className="history1 my-element1 mx-3 align-items-start p-5 my-3" style={{overflow:"hidden",overflowY:"scroll"}}>
          <h3 className="text-center mb-5">Your Queries</h3>
          {
          eries1.length>0 ? (
          eries1.map((query,index) => {
            return (
              <div className="card  ml-3 mb-3" style={{width:"70% "}} key={index}>
                <div className="card-body query-card">
                <p className="card-text">Email : {query.email}</p>
                  {/* <h5 className="card-title">{query.phone}</h5> */}
                  <p className="card-text">query : {query.suggestInfo}</p>
                  <p className="card-text">{query.created_at}</p>
                  {/* <a href="#" className="btn btn-primary">Button</a> */}
                </div>
              </div>

            );
          })):(
           <><div style={{backgroundColor:"white",textAlign:"center",padding:"6px 2px"}}> NO data is found</div></>
            
          )}

        </div>

      </div>
    </div>
  )
}

export default Profile