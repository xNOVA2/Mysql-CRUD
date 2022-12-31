import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {

  return (


    <div>
        <nav>
            <h2>CRUD</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/CREATE">Create User</Link> </li>
            </ul>
        </nav>
    </div>
  )
}
