import React, { memo, useEffect } from 'react'

const Navbar = (props) => {
    useEffect(() => {
      alert("Navbar Rendered")
    })
    
  return (
    <div>
      I am {props.adjective} Navbar
      I am {props.getAdjective()} Navbar
    </div>
  )
}

export default memo(Navbar)
