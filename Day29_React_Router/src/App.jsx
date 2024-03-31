import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import User from './assets/components/User'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <><Navbar /> <Home /></>
    },
    {
      path: "/about",
      element : <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element : <><Navbar /><Contact /></>
    },
    {
      path: "/user/",
      element : <><Navbar /><User /></>
    },
    {
      path: "/user/:username",
      element : <><Navbar /><User /></>
    }
  ])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
