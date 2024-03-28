import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sameer")
  const [email, setEmail] = useState("Sameer's Email")
  function handleClick() {
    alert("clicked");
  } 

  const handleMouseOver =()=>{
      alert("Mouse over")
  }

  const handleChange =(e)=>{
      setName(e.target.value)
  }
  return (
    <>
    <button onClick={handleClick}>Clicked</button>
    {/* <div onMouseOver={handleMouseOver} className="red">
      hey i am mouse over 
    </div> */}
    <input type="text" name="name" value={name} onChange={handleChange}/>
    <input type="text" name="email"/>
    </>
  )
}

export default App
