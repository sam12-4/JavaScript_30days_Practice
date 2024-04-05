import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting},
  } = useForm()

  const delay = (d) =>{
    return new Promise((resolve, reject) => {
      setTimeout((d) => {
        resolve()
      }, d*1000);
    })
  }

  const onSubmit =async (data) => {
    console.log("Sending data");
    let sendData = await fetch ("http://localhost:3001/",{method: "post", headers:{"Content-type" : "application/json"}, body: JSON.stringify(data)}) //send data to server
    // await delay(1)
    let res = await sendData.json()
    // if (data.username == "Raim"){
    //   setError("myform", {message : "This user is not allowed"})
    // }
    // if(data.username === "Shahzain"){
    //   setError("blockedUsers",{message:  "This User Name is Blocked"})
    // }
    console.log(res)
}
  return (
   <>
   {isSubmitting && <div>loading...</div> }
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input placeholder="Username" {...register("username", {required:{value:true, message:"username is a required field"}, minLength:{value:3, message:"Minimum 3 characters allowed"}, maxLength:{value:8, message:"Maximum 8 characters allowed"}})} type="text"/>
      {errors.username && <div className="red">{errors.username.message}</div>}
      <br />
      <input placeholder="Password" {...register("password", {required:{value:true, message:"password is a required field"}, minLength:{value:3, message:"Password should be of more than 3 characters"}})} type="password" />
      {errors.password && <div className="red">{errors.password.message}</div> }
      <br />
      <input disabled={isSubmitting} type="submit" value="Submit" />
      {errors.myform && <div className="red">{errors.myform.message}</div> }
      {errors.blockedUsers && <div className="red">{errors.blockedUsers.message}</div> }
    </form>
   </>
  )
}

export default App
