import React from 'react'

function PageFooter() {
    return (
        <div className='container'>
            <h2 className="text-center">Project Title : <span className="">Krishi Sethu</span></h2>
            <h2>Project Team</h2>
            <ul className="row">
                <li className="col-3">
                    <h5>Abhishek M</h5>
                    <label>Project Manager</label><br />
                    <label>9113244623</label><br />
                    <label>abhishek@gmail.com</label>
                </li>
                <li className="col-3">
                    <h5>Darshan MP</h5>
                    <label>Lead Developer</label><br />
                    <label>636328894</label><br />
                    <label>darshanmp@gmail.com</label>
                </li>
                <li className="col-3">
                    <h5>Ganesh Patil</h5>
                    <label>Designer</label><br />
                    <label>9880681007</label><br />
                    <label>ganeshpatil@gmail.com</label>
                </li>
                <li className="col-3">
                    <h5>Channappa Hurakadli</h5>
                    <label>Quality Assurance</label><br />
                    <label>8310360454</label><br />
                    <label>channappahurakadli@gmail.com</label>
                </li>
            </ul>
        </div>
    )
}

export default PageFooter