import React from 'react';
const Login = ({ formData, handleInputChange, handleSubmit, errorMsg }) => {
  const centeredCard = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  }
  return (
    <>
      <div className='container'>
        <div className="row" style={centeredCard}>
          <div class="col-md-6 col-sm-3">
            <div className="card bg-dark text-white shadow">
              <div className="card-header"><strong>Apparel</strong></div>
              <div className="card-body">
                <div className="col-md-6 bg-danger text-center">
                  <p className='fs-6'>*Instructions : Email - demo@demo | Password - demo</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" name="userEmail" className="form-control" id="email" placeholder="Enter email" value={formData.userEmail} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label for="pwd" className="form-label">Password:</label>
                    <input type="password" name='userPwd' className="form-control" id="pwd" placeholder="Enter password" value={formData.userPwd} onChange={handleInputChange} />
                  </div>
                  <div className='text-danger mb-2'>{errorMsg}</div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login;
