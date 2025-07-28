import React from 'react'

const Button = (props) => {
  return (
    <a className={`btn ${props.class} m-3`} href="#">{props.text}</a>
  )
}

export default Button