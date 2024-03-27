import {React, useEffect } from 'react'

const Navbar = ({color}) => {

//  Example of cleanup function
useEffect(()=>{
    return(()=>{
        alert("Component Unmounted")
    })
},[])

useEffect(() => {
    alert("I wil run on every Navbar render")
  })
    
  return (
    <div>
      "Hi i am Navbar of color {color}"
    </div>
  )
}

export default Navbar
