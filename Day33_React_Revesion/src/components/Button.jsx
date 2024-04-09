import React, { useContext } from 'react'
import Value from './Value'
import { AppContext } from '../../context/context'

const Button = () => {
    const value = useContext(AppContext)
    const HandleClick = () =>{
        value.setCount(value.count+1)
    }
  return (
    <div>
      <button onClick={HandleClick}>Click to change value </button>
      <Value /> 
    </div>

    

  )
}

export default Button
