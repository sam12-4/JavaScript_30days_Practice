import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    // useEffect(() => {
    //   console.log("Navbar Rendering");
    // })

    // // 
    // useEffect(() => {
    //     // alert("This will run on first render")
    //     return () => {
    //         alert("Component Unmounted")
    //     }
    // }, [])
    
  return (
    <header style={{marginBottom : "20px"}}>
      <nav>
        <NavLink to="/" className={({isActive})=>isActive ? "bg-red" : ""}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive ? "bg-red" : ""}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive ? "bg-red" : ""}>Contact</NavLink>
        <NavLink to="/cards" className={({isActive})=>isActive ? "bg-red" : ""}>Cards</NavLink>
      </nav>
    </header>
  )
}

export default Navbar