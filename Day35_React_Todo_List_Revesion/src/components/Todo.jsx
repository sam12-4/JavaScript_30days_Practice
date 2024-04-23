import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinsihed, setShowFinsihed] = useState(false)

    useEffect(() => {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }, [])
    
  
    const saveToLS = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    

    const handleChange =(e)=>{
      setTodo(e.target.value)
    }

    const handleFinsihed = () => {
      setShowFinsihed(!showFinsihed)
    }
    

    const handleUpdate =(e, id)=>{
      let todoIndex = todos.findIndex(todo=> {return todo.index == id})
      setTodo(todos[todoIndex].todo);
      let filteredTodos = [...todos].filter(todo => {return(todo.index !== id );})
      setTodos(filteredTodos)
      saveToLS()
        
    }

    const handleCheckbox =(e)=>{
        let id = e.target.name
        // console.log(id);
        // console.log(todos);
        let todoIndex = todos.findIndex(todo=> {return todo.index == id})
        let newTodos = [...todos]
        newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted
        setTodos(newTodos)
        saveToLS()
    }

    const handleDelete =async(e)=>{
      let id = await e.target.name;
      let filteredTodos = [...todos].filter(todo => {return(todo.index !== id );})
      setTodos(filteredTodos)
      saveToLS()
    }
    const addTodo = (todo) => {
      return new Promise((resolve, reject) => {
        setTodos([...todos, {index: uuidv4() ,todo, isCompleted : false }]);
        setTodo("")
        saveToLS()
        resolve();
      });
    };
  return (
    <div className='todoBox container my-10 p-10 text-white '>
        <div className="todoContainer  bg-black p-5 rounded-lg ">
        <div className="flex">
            <input type="text" name="" id="" className='w-[70vw] p-1 rounded-lg text-black' value={todo} onChange={handleChange}/>
            <button disabled={todo.length<=3} className='mx-3 bg-gray-500 disabled:bg-gray-400 p-2 rounded-lg  hover:bg-gray-600 transition-all' onClick={() => addTodo(todo)}>Save</button>
            </div>
            <h1 className='text-lg font-bold mt-5'>Your Todos</h1>  
            {todos.length>= 1 && <div className='mt-3'><input type="checkbox" checked={showFinsihed} onChange={handleFinsihed} id="finished" value="" /><label className='ms-4' htmlFor="finished">Show Finished</label></div>}
        {todos.map((items, index)=>{
          return (!showFinsihed || items.isCompleted) && <div key={items.index} className="todos my-5 flex items-center ">
            <input type="checkbox" name={items.index} onChange={handleCheckbox} checked={items.isCompleted} className='mx-3'/>
          <p className={`w-[65vw] text-base md:text-lg ${items.isCompleted ? "line-through" : ""}`}>{items.todo}</p>
          <button className='mx-2 bg-gray-500 p-2 rounded-lg hover:scale-105 hover:bg-gray-600 transition-all' onClick={(e)=>{handleUpdate(e, items.index)}}>Update</button>
          <button className='mx-2 bg-gray-500 p-2 rounded-lg hover:scale-105 hover:bg-gray-600 transition-all' name={items.index} onClick={handleDelete}>Delete</button>
      </div>
        }) }
        </div>
    </div>
  )
}

export default Todo
