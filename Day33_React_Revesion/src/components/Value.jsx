import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/context'

const Value = () => {
    // useEffect(() => {
    //  console.log(prop.count);
    // })
    const value = useContext(AppContext)
  return (
    <div>
      Value is {value.count}
    </div>
  )
}

export default Value
