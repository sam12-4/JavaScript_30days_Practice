import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Links from './components/Links'
import Navbar from './components/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { counterContext } from './context/Context'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Links/><div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div></>
    },
    {
      path : "/components",
      element:<><counterContext.Provider value={{count, setCount}}><Navbar /></counterContext.Provider></>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />


      
    
    </>
  )
}

export default App
