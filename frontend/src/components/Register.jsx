
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Register() {
  const [formData,setData]=useState({
    first_name:'',
    last_name:'',
    username:'',
    email:'',
    birth_date:'',
    location:'',
    password:''
  })
  const [errors,setError]=useState({})
  const [success,setSuccess]=useState(false)
  const [loading,setLoading]=useState(false)

  const handleChange =(e) =>{
    const {name,value} =e.target;
    setData(prev =>({
      ...prev,
      [name]: value
    }));
  }

  const handleRegistration = async (e) =>{
      e.preventDefault()
      setLoading(true)
      
      try{
        const response=await axios.post('http://127.0.0.1:8000/api/register/',formData)
        console.log('response.data :',response.data)
        console.log('Registration Successful');
        setError({})
        setSuccess(true)
      }
      catch(error){
        setError(error.response.data)
          console.error('Registration Error :',error.response.data)
      }
      finally{
        setLoading(false)
      }

  }
  return (
    <>
       <div className="container-fluid bg-dark d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 bg-secondary p-5 rounded shadow">
        <h3 className="text-light text-center mb-4">Create an Account</h3>
          <form onSubmit={handleRegistration}>
            <div className='mb-3'>
              <label className='form-label text-light'>First Name :</label>
              <input
                type='text'
                className='form-control'
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}
                placeholder='First Name'
              />
              
            </div>

            <div className='mb-3'>
              <label className='form-label text-light'>Last Name :</label>
              <input
                type='text'
                className='form-control'
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}
                placeholder='Last Name'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label text-light'>Username :</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={formData.username}
                onChange={handleChange}
                placeholder='Username'
              />
              <small>{errors.username && <div className='text-danger'>Username Already exists</div>}</small>
            </div>
            <div className='mb-3'>
              <label className='form-label text-light'>Email :</label>
              <input
                type='email'
                className='form-control'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
              />
              <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
            </div>
            <div className='mb-3'>
              <label className='form-label text-light'>Date of Birth :</label>
              <input
                type='date'
                className='form-control'
                name='birth_date'
                value={formData.birth_date}
                onChange={handleChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label text-light'>Location : </label>
              <input
                type='text'
                className='form-control'
                name='location'
                value={formData.location}
                onChange={handleChange}
                placeholder='Location'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label text-light'>Password :</label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
              />
              <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
            </div>
            {loading ? (
              <button type='submit' className='btn btn-info d-block mx-auto mt-5' disabled><FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon>Please Wait ...</button>
            ):(
              <button type='submit' className='btn btn-info d-block mx-auto mt-5'>Register</button>
            )}
            </form>
            {success && <div className='text-light'>Registration Successful</div>}
          </div>
        </div>
    </>
  )
}

export default Register