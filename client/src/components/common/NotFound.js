import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div>
        <h1>404 Not Found!</h1>
      </div>
      <div className='back-home-link'>
        <a href="/">⚽️ Back to home page ⚽️</a>
      </div>
      <hr />
    </>
  )
}

export default NotFound