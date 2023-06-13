import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './App.css'
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Gigs from './components/pages/gigs/Gigs';
import Gig from './components/pages/gig/Gig';
import Orders from './components/pages/orders/Orders';
import Messages from './components/pages/messages/Messages';
import Message from './components/pages/message/Message';
import Add from './components/pages/add/Add';
import Mygigs from './components/pages/mygigs/Mygigs';

function App() {
  const Layout = () =>{
    return(
      <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/gigs',
          element:<Gigs />
        },
        {
          path: '/mygigs',
          element:<Mygigs />
        },  
        {
          path:'/gig/:id',
          element:<Gig />
        },
        {
          path:'/orders',
          element:<Orders />
        },
        {
          path:'/messages',
          element:<Messages />
        },   
        {
          path:'/message/:id',
          element:<Message />
        },   
        {
          path:'/add',
          element:<Add />
        },                                  
      ]
    },
  ])

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
