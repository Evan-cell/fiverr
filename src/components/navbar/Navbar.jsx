import React, {useState,useEffect} from 'react'
import './Navbar.scss'

function Navbar() {
  const [active,setActive] = useState(false)
  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(()=>{
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll",isActive)
    }
  },[])
  const currentUser = {
    id:1,
    username: 'evan kim',
    isSeller: true
  }
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
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser&&<button>Join</button>}
            {currentUser &&(
              <div className="user">
                <img src="" alt="" />
                <span>{currentUser?.username}</span>
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                    <span>Gigs</span>
                    <span>Add new gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              </div>
            )}
        </div>
        </div>
{  active &&(    
   <> 
   <hr />
        <div className="menu">
          <span>Test1</span>
          <span>Test2</span>
        </div>
        </>
        )}
    </div>
  )
}

export default Navbar