import React from 'react';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mr-auto">
   <div className="container">
    <NavLink className="navbar-brand" to="/">User App</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>
        <Link to="/add" className="btn btn-outline-light">Add User</Link>
    </div>
  </nav>
  )
}

export default Navbar