import {React, useContext} from 'react'
import { counterContext } from '../context/Context'

const Component1 = () => {
    const value = useContext(counterContext)
  return (
    <div>
      i am component 1<br />
      The value of count is {value.count}
    </div>
  )
}

export default Component1
