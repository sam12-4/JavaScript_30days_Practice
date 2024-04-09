import React from 'react'

const Card = ({data}) => {
  return (
    data && data.map((item, index)=>(
        <div className='box boxflex' key={index}>
          <div>Id : {item.userId}</div>
          <div>Title : {item.title}</div>
          <div>Body : {item.body}</div>
          
        </div>
        
      ))
  )
}

export default Card
