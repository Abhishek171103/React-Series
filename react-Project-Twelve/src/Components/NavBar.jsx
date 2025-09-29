import React from 'react'
import { NavLink } from 'react-router-dom'        // react-router import ese karke hain
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <ul>
                {/* <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/dashboard">Dashboard</Link> </li> */}

                <li> <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Home
                    </NavLink> </li> 
                <li> <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        About
                    </NavLink> </li>
                <li> <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Dashboard
                    </NavLink> </li>
            </ul>
        </div>
    )
}

export default NavBar