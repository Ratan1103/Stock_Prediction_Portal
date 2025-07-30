import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react'
import {useNavigate } from 'react-router-dom'
const Header = () => {
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogout =() =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }
  return (
    <>
       <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4 pt-3 pb-5 align-items-start'>
        <Link className='navbar-brand' to='/'>Stock Portal</Link>
        
        <div className='ms-auto'>
          {isLoggedIn ? (
            <>
              <Button text='Dashboard' class='btn-info' url='/Dashboard' />
              <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </>
          ):(
            <>
              <Button text='Login' class='btn-outline-info' url='login'/>
              <Button text='Register' class='btn-info' url='register'/>
            </>
          )
          }
          
          
        </div>
      </nav>
    </>
  )
}

export default Header