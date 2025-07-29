import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
       <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4 pt-3 pb-5 align-items-start'>
        <Link className='navbar-brand' to='/'>Stock Portal</Link>
        
        <div className='ms-auto'>
          <Button text='Login' class='btn-outline-info' url='login'/>
          <Button text='Register' class='btn-info' url='register'/>
          
        </div>
      </nav>
    </>
  )
}

export default Header