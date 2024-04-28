import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,  incrementByAmount, multiply } from './redux/counter/counterSlice'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar />
      The value of count is {count}
      <div>
      <button onClick={() => dispatch(increment())}>+</button>
      Change Count 
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(6))}>inc</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </div>
  )
}

export default App
