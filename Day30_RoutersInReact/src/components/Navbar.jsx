import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>to
        hi i am navbar
        <br />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>

  )
}

export default Navbar
