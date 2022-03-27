import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
        <div>
        <h1>Page Not Found</h1>
        </div>
       
        <div>
        <button type="button" className="btn btn-link">
            <NavLink to="/">Back to home</NavLink>
        </button>
        </div>
      
    </div>
  )
}

export default NotFound