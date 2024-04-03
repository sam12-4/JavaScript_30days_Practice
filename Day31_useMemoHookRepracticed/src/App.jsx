import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(20_000_000).fill(0).map((_, i)=>{
  return{
  index : i,      
  isMagical: i===17_000_000
}})

function App() {
  const [count, setCount] = useState(0)
  // const magical = nums.find(item=>item.isMagical===true)
  const [numbers, setNumbers] = useState(nums)
  const magical = useMemo(() =>  numbers.find(item=>item.isMagical===true), [numbers])

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
      <h2>The magical number is {magical.index}</h2>
      <div className="card">
        <button onClick={() =>{ 
          setCount((count) => count + 1)
          if (count===10){
            setNumbers(new Array(20_000_000).fill(0).map((_, i)=>{
              return{
              index : i,      
              isMagical: i===16_000_000
            }}))
          }}
          }>
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
