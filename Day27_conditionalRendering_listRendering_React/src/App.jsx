import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)
  // Conditional Rendering case 1
  const [btn, setBtn] = useState(false)

  // Rendering Lists in React
  const [todos, setTodos] = useState([
    {
      title : "Hey1",
      desc : "desc1"
    },
    {
      title : "Hey2",
      desc : "desc2"
    },
    {
      title : "Hey3",
      desc : "desc3"
    }
  ])

  const Todo=({todo})=>
  {return (<>
    <div className="todos">{todo.title}</div>
    <div className="todos">{todo.desc}</div>
    </>)   
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
        <button onClick={() => setBtn(!btn)}>
          Click to {btn ? "hide" : "see"} Lower btn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* // Conditional Rendering case 1 */}
      {/* {btn ? <button>This will Show when button is True</button> : <button>This will Show when button is False</button>} */}
      {/* // Conditional Rendering case 2 */}
      {btn && <button className='my-4'>This will Show when button is True</button>}
      {/* <Todo todo={{title:"Sameer", desc :"desx"}}/> */}

      {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })}
    </>
  )
}

export default App
