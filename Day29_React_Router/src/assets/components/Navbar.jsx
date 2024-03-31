import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink className={(e)=>{return e.isActive? "nav-active":""}} to="/">Home</NavLink>
      <NavLink className={(e)=>{return e.isActive? "nav-active":""}} to="/about">About</NavLink>
      <NavLink className={(e)=>{return e.isActive? "nav-active":""}} to="/contact">Contact</NavLink>
      <NavLink className={(e)=>{return e.isActive? "nav-active":""}} to="/user">User</NavLink>
    </nav>
  )
}

export default Navbar