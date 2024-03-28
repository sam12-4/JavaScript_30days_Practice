import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("White")

    // Case 0
    // useEffect(()=>{
    //   alert("This will run on every render")
    // })

  // Case 2
  useEffect(()=>{
    alert("This will run on first render")
  },[])
  
  // Case 3
  useEffect(()=>{
    alert("This will run on every count change and initialization")
  },[count])


  
    // Case 3
    useEffect(()=>{
      alert("This will run on every Navbar color change")
      setCount(count + 1)
    }, [color])

  return (
    <>
    {/* <Navbar color={color}/> */}
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
