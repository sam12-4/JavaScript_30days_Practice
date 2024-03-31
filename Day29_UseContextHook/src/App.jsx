import { useState, useContext, createContext} from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { counterContext } from './context/context'


function App() {
  
  const [count, setCount] = useState(0)
  const handleClick=()=>{
    setCount(count+1)
  }
  return (
    <counterContext.Provider value={{count, setCount}}>
    <>
      <Navbar />
      <button onClick={handleClick}>Click here <br />{count}</button>
    </>
    </counterContext.Provider>
  )
}

export default App
