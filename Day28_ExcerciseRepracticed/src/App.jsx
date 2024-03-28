import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

async function FetchData (){
  let api = await fetch("https://jsonplaceholder.typicode.com/posts")
  let response =await api.json()
  setData(response)
}

function Card({card}) {
  return (
    <div key={card.id} className="card">
      <h1>title : {card.title}</h1>
      <p>body : {card.body}</p>
      <span>userId : {card.userId}</span>
    </div>
  );
}
  useEffect(() => {
    FetchData()
  }, [])
  
  return (
    <>
    <div className="cards">
      {data.map(card=>{
        return <Card card={card}/>
      })}
      </div>
    </>
  )
}

export default App
