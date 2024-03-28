import {React, useEffect} from 'react'

const Navbar = ({color}) => {

    // Case 0
  useEffect(()=>{
    alert("This will run on every Navbar render")
  })

//   Example of Cleanup function
useEffect(() => {
  return () => {
    alert("Component unmounted")
  }
}, [])


  return (
    <div>
      Hi i am Navbar of color {color}
    </div>
  )
}

export default Navbar
