import { useCallback, useContext, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useForm } from 'react-hook-form'

// const nums = new Array(30_000_000).fill(0).map((_, i)=>{
//   return{
//     index : i,
//     isMagical : i===27000000
//   }
// })

function App() {
  const [count, setCount] = useState(0)
  // const [numbers, setNumbers] = useState(num)
  const [adjective, setAdjective] = useState("good")
  // const [numbers, setNumbers] = useState(nums)
  // useCallback(() =>{
  //   return ("another")
  // })
  
  // const getAdjective =useCallback(
  //   () => {
  //     if (count>=10) {
  //       return ("second")
  //     }
  //     else{
  //       return ("another")
  //   }
  //     // return ("another")
  //   },[count>=10]
  // )
  
  // UseMemo Hook in React
  
  // const magical =  useMemo(() => numbers.find(item=>item.isMagical), [numbers])

  // React Hook Form
  const [form, setForm] = useState({
    name : "",
  email : ""
  })

  // const handleChange =(e)=>{
  //   setForm({...form, [e.target.name] : e.target.value})
  // }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting},
  } = useForm()

  const delay=(seconds)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      },seconds*1000);
    })
  }
  
  const onSubmit = async(data)=>{
    // if (data.name=="Sameer"){
    //   setError("notAllowedUser",{message : "This user is not allowed"})  // Yai aik hi dafa chalayga beacuse of backend integration 
    // }
    // if (data.name=="Anas"){
    //   setError("BlockedUSer",{message : "This user is blocked"})  // Yai aik hi dafa chalayga beacuse of backend integration 
    // }
    let api =await fetch("http://localhost:3000/", {method : "POST" , headers: {"Content-Type": "application/json"}, body : JSON.stringify(data)})
    // let res = await api.json();
    await delay(1)
    console.log(api);
    console.log(typeof(data));
  }

  return (
    <>
    {/* <Navbar  adjective={adjective} getAdjective={getAdjective} /> */}
      <div>
        {/* Magical number is {magical.index} */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {isSubmitting && <div>Loading...</div>}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Enter name' {...register("name" , {required: {value : true,  message : "Please enter your name"}, minLength : {value : 4, message : "Name should be longer than 3 words"}})} type="text" />
          {errors.name && <div>{errors.name.message}</div>}
          <br />
          <input placeholder='Enter email' {...register("email", {required: {value : true,  message : "Please enter your email"}, minLength : {value : 8, message : "email should be longer than 8 characters"}})} type="email" />
          {errors.email && <div>{errors.email.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />

        </form>
      {errors.notAllowedUser && <div>{errors.notAllowedUser.message}</div>}
      {errors.BlockedUSer && <div>{errors.BlockedUSer.message}</div>}
        
        {/* <button onClick={() =>{ 
          setCount((count) => count + 1)
          if (count===10){
            setNumbers(new Array(30_000_000).fill(0).map((_, i)=>{
              return{
                index : i,
                isMagical : i===17000
              }
            }))
          }
        }
          }>
          count is {count} */}
          
        {/* </button> */}
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
