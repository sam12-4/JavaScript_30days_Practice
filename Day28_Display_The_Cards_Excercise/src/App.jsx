import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  },[]);

  return (
    <>
      <div className="cards m-auto mx-12  flex flex-wrap ">
        {data &&
          data.map((card) => {
            return (<div key={card.id} className="card m-5 border border-1 w-1/4 bg-black text-white flex flex-col gap-3 p-5">
                <div className="id">ID = {card.userId} </div>
                <div className="title"> Title = {card.title} </div>
                <div className="body">Body = {card.body} </div>
              </div>
            )
          })}
      </div>
    </>
  );
}

export default App;
