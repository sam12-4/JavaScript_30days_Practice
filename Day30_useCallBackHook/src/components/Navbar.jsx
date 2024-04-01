import React, { memo } from 'react'

const Navbar = ({adjective, getadjective}) => {
    console.log("I am rendering");
  return (
    <div>
      <nav>I am {adjective} navbar</nav>
      <span>{getadjective()}</span>
    </div>
  )
}

// Memo dekhay ga kai agar poranay props aarahay hain to hi change karo warna nhi
export default memo( Navbar )
