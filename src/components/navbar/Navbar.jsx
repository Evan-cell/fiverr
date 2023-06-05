import React, {useState} from 'react'
import './Navbar.scss'

function Navbar() {
  const [active,setActive] = useState(false)
  return (
    <div className={active ? "navbar active": "navbar"}>
        <div className="container">
        <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
        </div>
        <div className="links">
            <span>Fiver Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign In</span>
            <span>Become a Seller</span>
            <button>Join</button>
        </div>
        </div>
        <hr />
        <div className="menu">
          <span>Test1</span>
          <span>Test2</span>
        </div>
    </div>
  )
}

export default Navbar