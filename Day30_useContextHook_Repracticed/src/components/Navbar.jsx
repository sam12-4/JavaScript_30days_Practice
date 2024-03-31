import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <div>
      <Link to="/"> go to page home</Link>
      <Link to="/components"> go to page inner components</Link>
      <Button />
    </div>
  )
}

export default Navbar
