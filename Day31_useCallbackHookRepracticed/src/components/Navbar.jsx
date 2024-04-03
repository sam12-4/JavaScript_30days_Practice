import React, { memo } from 'react'

const Navbar = (props) => {
    console.log("Rendering");
  return (
    <div>
      HI i am {props.adjective} navbar i am {props.getAdjective()}
    </div>
  )
}

export default memo(Navbar)
