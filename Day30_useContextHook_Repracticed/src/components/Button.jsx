import {React, useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/Context'


const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={()=>{value.setCount((count)=>count +1)}}>Count now</button>
      <Component1 />
    </div>
  )
}

export default Button
