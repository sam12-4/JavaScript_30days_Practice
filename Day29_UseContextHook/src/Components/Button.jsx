import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = ({count}) => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={()=>{value.setCount(value.count+1)}}>Click Here</button>
      <Component1 />
    </div>
  )
}

export default Button
