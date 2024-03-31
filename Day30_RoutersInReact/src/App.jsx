import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path :"/",
      element: <><Navbar /><Home /></>
    },
    {
      path :"/about",
      element: <><Navbar /><About /></>
    },
    {
      path :"/contact",
      element: <><Navbar /><Contact /></>
    }
  ])

  return (
   <>
      <RouterProvider router={router} />
   </>
  )
}

export default App
