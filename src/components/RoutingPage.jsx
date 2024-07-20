import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Header from './Header'
import {ToastContainer} from "react-toastify"

const RoutingPage = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<Header/>,
            
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<Signup/>
        },
        

    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default RoutingPage
