import React, { useContext } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../AuthProvider'

const Login = () => {
  const [userData,setData]=useState({
    username :'',
    password: ''
  })
  const [loading,setLoading]=useState(false)
  const [erros,setErrors]=useState(false)
  const navigate=useNavigate()
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

  const handleChange = (e) =>{
      const {name,value} =e.target
      setData(prev=>({
        ...prev,
        [name]:value
      }))
  }
  const handleLogin = async (e) =>{
    e.preventDefault()
    setLoading(true)

    try {
      const response=await axios.post('http://127.0.0.1:8000/api/token/',userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      setErrors(false)
      setIsLoggedIn(true)
      navigate('/dashboard')
    }
    catch{
      setErrors(true)
      console.log('Invalid Credential')
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <>
      <div className="container-fluid bg-dark d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 bg-secondary p-5 rounded shadow">
        <form onSubmit={handleLogin}>
          <h2 className='text-light text-center mb-4'>Login In</h2>
          <div className='mb-3'>
              <label className='form-label text-light'>Username :</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={userData.username}
                onChange={handleChange}
                placeholder='Username'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label text-light'>Password :</label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={userData.password}
                onChange={handleChange}
                placeholder='Password'
              />
          </div>
          {erros && <div className='text-danger text-center bold m-2'>Invalid login Credential</div>}
          {loading ? (
              <button type='submit' className='btn btn-info d-block mx-auto mt-2' disabled><FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon>Loggin In</button>
              ):(
              <button type='submit' className='btn btn-info d-block mx-auto mt-2'>Login</button>
              )} 
        </form>
      </div>
      </div>
    </>
  )
}

export default Login