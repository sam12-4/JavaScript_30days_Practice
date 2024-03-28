import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[form, setForm]= useState({
    name : "Sameer",
    email : "sameerh64h@gmail.com"
  })

  const handleClick =()=>{
    alert("Bhai Clicked")
  }

  const handleMouse =()=>{
    alert("Bhai mouse aagya")
  }

  const addInput =(e)=>{
    setForm({...form, [e.target.name] : e.target.value})
    console.log(form.name, form.email)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* <div onMouseOver={handleMouse} className="red">

        hi i am red
      </div> */}
      <input type="text" name="name" value={form.name} onChange={addInput}/>
      <input type="email" name="email" value={form.email} onChange={addInput}/>
    </>
  )
}

export default App
