import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container-fluid bg-dark d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 bg-secondary p-5 rounded shadow">
      <h2 className='text-light text-center mb-4'>Login In</h2>
      <div className='mb-3'>
              <label className='form-label text-light'>Username :</label>
              <input
                type='text'
                className='form-control'
                name='username'
                placeholder='Username'
              />
            </div>
      <div className='mb-3'>
              <label className='form-label text-light'>Password :</label>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
              />
            </div>
      </div>
      </div>
    </>
  )
}

export default Login