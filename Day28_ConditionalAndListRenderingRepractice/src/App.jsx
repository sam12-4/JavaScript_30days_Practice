import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btn, setBtn] = useState(true)

  const [todos, setTodos] = useState([
    {
      title: "I am a todo title 1",
      desc: "I am a todo description 1",
  },
    {
      title: "I am a todo title 2",
      desc: "I am a todo description 2",
  },
    {
      title: "I am a todo title 3",
      desc: "I am a todo description 3",
  }
])
  // const Todo =({todos})=>{
  //   return(
  //     <>
    
  //     </>
  //   )
  // }
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
        <button onClick={() => setBtn(!btn)}>
        Click Me to {btn? "hide" :  "show"} button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {todos.map(todo=>{
          return <>
          <div>{todo.title}</div>
          <div>{todo.desc}</div>
          </>
        })}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <button>I am a button of state {btn? "True" : "False"}</button> */}
      {btn && <button>I am a button of state true</button>}
    </>
  )
}

export default App
