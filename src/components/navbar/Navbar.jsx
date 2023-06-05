import React, {useState,useEffect} from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

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
  const [open,setOpen] = useState(false)
  const {pathname} = useLocation()
  return (
    <div className={active || pathname !=='/' ? "navbar active": "navbar"}>
        <div className="container">
        <div className="logo">
          <Link to='/' className='link'>
            <span className="text">fiverr</span>
            </Link>
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
              <div className="user" onClick={()=>setOpen(!open)}>
                <img src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" alt="" />
                <span>{currentUser?.username}</span>
                {!open&&<div className="options">
                  {currentUser?.isSeller && (
                    <>
                    <Link to='/Gigs' className='link'>
                    <span>Gigs</span>
                    </Link>
                    <Link to='/add' className='link'>
                    <span>Add new gig</span>
                    </Link>
                    </>
                  )}
                  <Link to='/orders' className='link'>
                  <span>Orders</span>
                  </Link>
                  <Link to='/messages' className='link'>
                  <span>Messages</span>
                  </Link>
                  <span>Logout</span>
                </div>}
              </div>
            )}
        </div>
        </div>
{  (active || pathname !=='/') &&(    
   <> 
   <hr />
        <div className="menu">
          <Link className='link menuLink' to='/'>
            Graphics and Design
          </Link>
          <Link className='link' to='/'>
            Video and Animation
          </Link>
          <Link className='link' to='/'>
            Writing and Translation
          </Link>
          <Link className='link' to='/'>
            Ai services
          </Link>   
          <Link className='link' to='/'>
            Digital Marketing
          </Link> 
          <Link className='link' to='/'>
            Music and Audio
          </Link>   
          <Link className='link' to='/'>
            Programming and Tech
          </Link>
          <Link className='link' to='/'>
            Bussiness
          </Link> 
          <Link className='link' to='/'>
            Lifestyle
          </Link>                                
        </div>
        </>
        )}
    </div>
  )
}

export default Navbar