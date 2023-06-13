import React from 'react'
import  './Project.scss'
import { Link } from 'react-router-dom'
function Project({item}) {
  return (
    <Link to='/' className='link'>
    <div className='projcard'>
      <img src={item.img} alt="" />
      <div className="info">
        <img src={item.pp} alt="" />
      </div>
      <div className="texts">
        <h2>{item.cat}</h2>
        <span>{item.username}</span>
      </div>
    </div>
    </Link>
  )
}

export default Project