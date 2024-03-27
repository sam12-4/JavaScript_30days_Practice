import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a = useRef(0);

  // case 0:
  // use Ref Hook is used when we want to use the value while rendering or other lifecycle method, the value reamins same througout the app
  
  // case 1:
  // It is not used in states or components but it is used when we have to give a reference to a certain component's button or any other thing
  // useRef()
  // useEffect(() => {
  //   console.log("Rendering" + (a+1));
  // }, )
  
  // case 0 Implementation
  // useEffect(() => {
  //   a.current += 1 
  //   console.log("Rendering" + (a.current));
  // }, )
  
  // case 1 Implementation
  const btnRef = useRef();

  useEffect(() => {
    console.log("first Rendering");
    btnRef.current.style.backgroundColor = "red";
  },[]);

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
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <button btn={btn}>Click me</button> */}
    </>
  )
}

export default App
