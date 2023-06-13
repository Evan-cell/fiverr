import React from 'react'
import  './Gigcard.scss'
import { Link } from 'react-router-dom'
function Gigcard({item}) {
  return (
    <Link to='/gig/123'>
    <div className='gigcard'>
        <img src={item.img} alt="" />
        <div className="info">
            <div className="user">
                <img src={item.PP} alt="" />
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src="./img/star.png" alt="" />
                <span>{item.star}</span>
            </div>
        </div>
        <hr />
        <div className="details">
            <img src="./img/heart.png" alt="" />
            <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
            </div>

        </div>
    </div>
    </Link>
    
  )
}

export default Gigcard