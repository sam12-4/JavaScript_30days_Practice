import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div>
      i am Links
      <Link to="/">Home</Link>
      <Link to="/components">ComponentsLink</Link>
    </div>
  )
}

export default Links
