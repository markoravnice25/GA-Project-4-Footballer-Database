import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>404 Not Found!</h1>      
      <div className='back-home-link'>
        <a href="/">Back to home page</a>
      </div>
      <hr />
      
    </>
  )
}

export default NotFound