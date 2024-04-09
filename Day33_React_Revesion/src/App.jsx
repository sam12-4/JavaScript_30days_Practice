import { useEffect, useRef, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
// import { data } from './assets/data'
import Card from './components/Card'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { AppContext } from '../context/context'

function App() {
  //  Use state


  // Understanding UseEffect, will run on every render
  // useEffect(() => {
  //   console.log('Rendering');
  // })

  // Understanding UseEffect, will run on count change
  // useEffect(() => {
  // console.log('count changed');
  // },[count])

  // Understanding UseEffect, will run on first render
  // useEffect(() => {
  // console.log('first Rendering');
  // },[])

  // Conditional Rendering List

  // const [todo, setTodo] = useState({title : "title" , description : "description"})
  // const Todo = ({todo}) =>{
  //   return <><div>{todo.title}</div>
  //   <div>{todo.description}</div></>

  // }


  const [todos, setTodos] = useState([
    { title: "title1", description: "description1" },
    { title: "title2", description: "description2" },
    { title: "title3", description: "description3" },
    { title: "title4", description: "description4" },
    { title: "title5", description: "description5" }
  ])
  // const Todo = ({todos}) =>{
  //   return todos.map((todo, index)=>( 
  //    <div key={index}>
  //     <div>{todo.title}</div>
  //   <div>{todo.description}</div>
  //   </div>))
  //   }

  // let a = useRef(0)
  // useEffect(() => {
  // a.current += 1
  // console.log('Rendering', a.current);
  // if (count===10)btnRef.current.style.color = "red";
  // },[count])

  //  case1 : Use ref Hook value remains same through out the Lifcycle of component and across rerenders

  const btnRef = useRef()

  //  Display the cards excercise
  // useEffect(async() => {
  //   let api = await "https://jsonplaceholder.typicode.com/posts"
  //   let data = api.json()
  //   console.log(data);

  // }, [])

  const [data, setData] = useState(null)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => { setData(data) })
  }, [])

  //  Event Listeners in  React

  const handleMouseEnter = () => {
    // alert("Mouse Entered")
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const [form, setForm] = useState({
    name: "",
    email: ""
  })

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /> <Contact /></>
    },
    {
      path: "/Cards",
      element: <><Navbar /><div className='flex'>
        <Card data={data} />
      </div></>
    }
  ])
  const [count, setCount ] = useState(0)

  return (
    <>
      {/* <Navbar /> */}

      {/* <div ref={btnRef} className="card" onMouseEnter={handleMouseEnter}>
        <button onClick={()=>{setCount(count+1)}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <form action="">
        <input type="text" value={form.name} name="name" id="" onChange={handleChange}/><br/>
        <input type="email" value={form.email} name="email" id="" onChange={handleChange}/><br/><br/>
        <button type="submit">Submit</button>
      </form> */}

      {/*  Practicing React Router now */}
      <AppContext.Provider value={{count, setCount}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  )
}

export default App