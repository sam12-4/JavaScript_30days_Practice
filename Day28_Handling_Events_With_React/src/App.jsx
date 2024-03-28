import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({
    name: "Sameer",
    email: "sameerh64h@gmail.com"
  })
  function handleClick() {
    alert("clicked");
  } 

  const handleMouseOver =()=>{
      alert("Mouse over")
  }

  const handleChange =(e)=>{
      setForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <>
    <button onClick={handleClick}>Clicked</button>
    {/* <div onMouseOver={handleMouseOver} className="red">
      hey i am mouse over 
    </div> */}
    <input type="text" name="name" value={form.name} onChange={handleChange}/>
    <input type="email" name="email" value={form.email} onChange={handleChange}/>
    </>
  )
}

export default App
