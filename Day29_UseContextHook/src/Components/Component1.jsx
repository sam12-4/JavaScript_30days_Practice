import {React, useContext}from 'react'
import { counterContext } from '../context/context'


const Component1 = () => {
    const value = useContext(counterContext)
  return (
    <div>
      Component 1
      <br></br>
      The value of count is {value.count}
    </div>
  )
}

export default Component1
