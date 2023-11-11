import React, { useEffect } from 'react'
import "./Notfound.css"
const Notfound = () => {
  return (
    <div className="msg-board">
      <h1>404</h1>
      <p>Oops! The page you're looking for could not be found.</p>
      <p>Go back to <a href="/">homepage</a>.</p>
    </div>
  )
}

export default Notfound