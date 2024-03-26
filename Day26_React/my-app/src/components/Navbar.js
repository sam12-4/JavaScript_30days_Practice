import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
      <div>
        <Footer footerText="Hi i am navbar footer"/>
        <ul> 
            <li>{props.firstNavComp}</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      
    </div>
  )
}

export default Navbar
