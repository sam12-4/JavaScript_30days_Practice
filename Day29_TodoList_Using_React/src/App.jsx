import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCircle } from "react-icons/fa"; // Import the FaCircle icon component from react-icons/fa

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("todo");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(true);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todosString = localStorage.getItem("todos");
    if (todosString) {
      let todos = JSON.parse(todosString);
      setTodos(todos);
      console.log(todos);
    }
  }, []);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleSave = (e) => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleEdit = (e, todo, deleteid) => {
    setTodo(todo);
    let id = deleteid;
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos([...newTodos]);
    console.log(todos);
    saveToLS();
  };

  const handleDelete = (e, deleteid) => {
    let id = deleteid;
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos([...newTodos]);
    saveToLS();
    console.log(todos);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    setTodos(updatedTodos);
    saveToLS();
  };

  const toggleShowFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <>
      <Navbar />
      <div className="container md:mx-auto md:min-w-fit w-5/6 mx-auto md:w-2/4">
        <div className="todoBox my-5 bg-gray-300 p-5 rounded-lg md:h-[80vh] shadow-md shadow-slate-600">
          <h1 className="text-xl text-center font-bold my-2">
            iTask - My Todo List
          </h1>
          <h1 className="my-2 text-lg font-bold">Add your Todos Here</h1>
          <div className="w-full flex flex-col gap-3">
            <input
              className="rounded-md w-full p-2"
              type="text"
              name=""
              id="todotext"
              value={todo}
              onChange={handleChange}
            />
            <button
              id="save"
              disabled={todo.length <= 3 || todos.length >= 5}
              className={`bg-violet-600 py-1 px-2 rounded-lg text-white ${
                todo.length <= 3 || todos.length >= 5
                  ? "bg-violet-500 cursor-not-allowed"
                  : ""
              } hover:bg-violet-500 w-full`}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          <div className="todos">
            <h1 className="mt-5 text-lg">Your Todos</h1>
            <hr className="my-4" />
            <input
              type="checkbox"
              checked={showFinished}
              name=""
              id=""
              onClick={toggleShowFinished}
            />{" "}
            Show Finished
            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className="todoCard flex items-center gap-5 my-4 justify-between"
                  >
                    <div className="flex gap-6">
                      <input
                        type="checkbox"
                        name={item.id}
                        checked={item.isCompleted}
                        id=""
                        onClick={handleCheckbox}
                      />
                      <span className={item.isCompleted ? "line-through" : ""}>
                        {item.todo}
                      </span>
                    </div>
                    <div className="buttons flex">
                      <button
                        className="mx-1 bg-violet-600 py-1 px-2 rounded-lg hover:bg-violet-500 text-white md:text-lg text-sm"
                        onClick={(e) => {
                          handleEdit(e, item.todo, item.id);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="mx-1 bg-violet-600 py-1 px-2 rounded-lg hover:bg-violet-500 text-white md:text-lg text-sm"
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
