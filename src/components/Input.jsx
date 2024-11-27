import React from 'react'

function Input() {
  return (
    <div>
        <h1 className="mt-5 text-center">Enter the soil details</h1>
    <div className="bg-body-secondary">
      <div className='container input-cont m-5 p-3'>
        <div className="d-flex justify-content-center align-content-center p-5 mx-5">
          <form action="" className="justify-content-center ">
            <div className="form-group container row">
              <div>
                <label htmlFor="nitrogen" className="col-sm-2 col-form-label">N (Nitrogen) : </label>
                <input type="number" id='nitrogen' name='nitrogen' /> %
              </div>
              <div>
                <label htmlFor="phosphorous" className="col-sm-2 col-form-label">P (Phosphorous) : </label>
                <input type="number" id='phosphorous' name='phosphorous' /> %
              </div>
              <div>
                <label htmlFor="potassium" className="col-sm-2 col-form-label">K (Potassium) : </label>
                <input type="number" id='potassium' name='potassium' /> %
              </div>
              <div>
                <label htmlFor="temperature" className="col-sm-2 col-form-label">Temperature : </label>
                <input type="number" id='temperature' name='temperature' /> &deg;C
              </div>
              <div>
                <label htmlFor="humidity" className="col-sm-2 col-form-label">Humidity : </label>
                <input type="number" id='humidity' name='humidity' /> %
              </div>
              <div>
                <label htmlFor="ph" className="col-sm-2 col-form-label">pH : </label>
                <input type="number" id='ph' name='ph' /> mm
              </div>
              <div>
                <label htmlFor="rainfall" className="col-sm-2 col-form-label">Rainfall  : </label>
                <input type="number" id='rainfall' name='rainfall' /> mm
              </div>
              <div className='mt-5'>
                <button type="button" class="btn btn-outline-success">Submit</button>
              </div>
            </div>
          </form>
        <div>
          predicted crop
        </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Input