import React, { forwardRef } from 'react'

const Contact = forwardRef((props,ref)=> {
  return (
    <div ref={ref} className='bg-body-tertiary'>
    <div className='contact p-5 container '>
      <h1>Contact Us</h1>
        <div className="mb-3 mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Email Adress</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className='mb-3'>
            <label htmlFor="mobile" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="mobile" placeholder="Enter Your Phone Number"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Query</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" minLength={25} ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </div>
    </div>
  )
})

export default Contact
