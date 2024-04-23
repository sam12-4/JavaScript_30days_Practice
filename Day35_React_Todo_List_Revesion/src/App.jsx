import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Navbar />


<Todo />    
    </>
  )
}

export default App
