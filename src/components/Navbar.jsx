import axios from 'axios';
import React ,{useEffect,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import summary from '../helper/summary';
import { toast } from 'react-toastify';

function Navbar(props) {
    const [profile,setProfile]=useState(false);
    const [login,setlogin]=useState(true)
    const navigate=useNavigate();
    const location=useLocation();
    const[Admin1,setAdmin1]=useState(false);
    const handlelogoutSubmit=async()=>
    {
        const response=await axios({
            method:summary.logout.method,
            url:summary.logout.url,
            headers: {
                "Content-Type": "application/json", 
            },
            withCredentials: true

        })
        console.log(response);
        if(response?.data.success==true)
        {
            setAdmin1(false);
            setlogin(true);
            toast.success(response?.data?.mess);
            navigate("/login");
        }
    }
    const userDetail=async()=>
        {
            const userData=await axios({
                    method:summary.userDetails.method,
                    url:summary.userDetails.url,
                    headers: {
                        "Content-Type": "application/json", 
                    },
                    withCredentials: true} )

            const data1=userData?.data?.data;
            console.log(data1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            if(userData?.data?.error==true)
            {
            //    navigate('/login');
               return;
            }
            setlogin(false);
            if(data1.role=="admin")
            {
                
                setAdmin1(true);
                console.log(Admin1);
            }
            
        }
    const history=useNavigate();
    const handleProfile=()=>
        {
            setProfile((profile)=>
            {
                 return !profile;
            })
        }
        const handleClick1 = (linked) => {
            history(`/${linked}`); 
            handleProfile(); // Use navigate to go to the provided route
          };
          useEffect(()=>
        {
            userDetail();
        },[location.pathname]);
    useEffect(() => {
        // Initialize tooltips
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });

       
      }, []);

    return (

        
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow bg-success-subtle">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to="/"><img src="/mainIcon.png" className="icon" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-headers me-auto mb-2 mb-lg-0 gap-3 navbar-txt">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/"><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={(evt) => props.handleClick(evt, "about")}><b>About</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={(evt) => props.handleClick(evt, "services")} to="/"><b>Services</b></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" onClick={(evt) => props.handleClick(evt, "contact")} to="/">Contact</Link>
                            </li> */}


                        </ul>
                        
                        <ul className="d-flex gap-4 mt-2 mx-5 right-nav z-3 ">
                            {/* input panel icon*/}
                            <Link to="/input"><img src="/public/panelicon.webp" alt="" className='panel'  data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Input Panel" /></Link>
                           
                            {/* profile icon */}
                            {/* <Link to="/profile"><i type="button" className="fa-solid fa-user fa-lg align-content-center"  ></i></Link> */}
                            <div style={{display:"grid",alignItems:"center",position:"relative"}}>
                            <div onClick={handleProfile} style={{display:"flex",alignItems:"center"}}>
                            <i type="button" className="fa-solid fa-user fa-lg align-content-center"></i>
                            </div>
                            
                            {
                                profile && (<div style={{width:"72px",color:"white" ,borderRadius:"15%" ,backgroundColor:"#ADD8E6",position:"absolute",top:"40px",left:"-24px"}}>
                                    <div className='colorVer' onClick={()=>handleClick1("profile")} style={{width:"100%",display:"grid",cursor:"pointer",alignItems:"center",justifyContent:"center",padding:"7px"}}>
                                         Profile
                                    </div>
                                    {
                                        Admin1 &&(<div className='colorVer' onClick={()=>handleClick1("admin")} style={{width:"100%",cursor:"pointer",display:"grid",alignItems:"center",justifyContent:"center",padding:"7px"}}>
                                            Admin
                                      </div>)
                                    }
                                    
                                  
                                     </div>)
                            }
                            </div>

                            {/* language icon 
                            <Link><i type="button" className="fa-solid fa-language fa-lg align-content-center" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Language"></i></Link> */}

                            {/* login button */}
                            <i type="button" className="fa-solid fa-language fa-lg align-content-center"></i>
                            {
                                login ? (<Link to="/login">
                                    <button type="button" className="btn btn-primary align-content-center" >Login</button>
                                  </Link>):(<div>
                <button type="button" onClick={handlelogoutSubmit} className="btn btn-primary align-content-center" >Logout</button>
              </div>)
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar