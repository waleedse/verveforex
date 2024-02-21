import React from 'react';

const AddPromotion = () => {
    return (
        <div>
 <div className="card">
  <div className="card-header">
    <h5>Form Grid</h5>
  </div>
  <div className="card-body">
    <form>
      <div className="row">
        <div className="col-12">
          <div className="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
              <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                </path>
              </symbol>
            </svg>
            <svg className="bi flex-shrink-0 me-2" width={24} height={24}>
              <use xlinkHref="#info-fill" />
            </svg>
            <div> When working with the Bootstrap grid system, be sure to place form elements within column
              classes. </div>
          </div>
        </div>
        <div className="form-group col-md-6">
          <label className="form-label" htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div className="form-group col-md-6">
          <label className="form-label" htmlFor="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="inputAddress2">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label className="form-label" htmlFor="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4">
          <label className="form-label" htmlFor="inputState">State</label>
          <select id="inputState" className="form-select">
            <option selected>select</option>
            <option>Large select</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label className="form-label" htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  </div>
</div>

        </div>
    );
};

export default AddPromotion;
