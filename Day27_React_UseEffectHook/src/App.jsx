import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("color " + 1)

  // Render Definition

  // In React, a render refers to the process of updating the DOM (Document Object Model) based on changes in the component's state or props. When a component's state or props change, React re-evaluates the component's render function to determine what should be displayed on the screen.

  // During the render process, React creates a virtual representation of the UI called the Virtual DOM. It then compares this Virtual DOM with the actual DOM and updates only the parts of the DOM that have changed. This process is known as reconciliation.

  // So, when we talk about a render in React, we are referring to the process of updating the UI based on changes in the component's state or props. The `useEffect` hook runs after each render, allowing you to perform side effects such as data fetching, subscriptions, or DOM manipulations.


  // case 0 : this use effect hook will run on every render i.e on every render and also when the component mounts
  useEffect(() => {
    alert("I wil run on every render")
  })

   // case 1 : this use effect hook will run on first render 
   useEffect(() => {
     alert("I wil run on first render")
    }, [])  
    
    //  Note that initailly the value is set so it means on every first render thi use effect hook will execute
    // case 2 : this use effect hook will run on the value of count change and will render it every component where count is changed
    useEffect(() => {
      alert("I wil run on every count change")
    }, [count])
    
    // case 3 : this use effect hook will run on the value of color change and will render it every component where color is changed
  useEffect(() => {
    alert("Color Changed")
    setCount(count +1)
  }, [color])

  //  Example of cleanup function in Navbar.jsx
  
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
