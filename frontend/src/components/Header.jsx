import React from 'react'
import Button from './Button'

const header = () => {
  return (
    <>
       <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4 pt-3 pb-5 align-items-start'>
        <a className='navbar-brand' href="#">Stock Portal</a>
        
        <div className='ms-auto'>
          <Button text='Login' class='btn-outline-info'/>
          <Button text='Register' class='btn-info'/>
          
        </div>
      </nav>
    </>
  )
}

export default header