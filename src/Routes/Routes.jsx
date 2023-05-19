import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Error from "../layouts/Error/Error";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Register from "../layouts/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";


  const router = createBrowserRouter([
         {
            path:'/',
            element:<Main></Main>,
            errorElement:<Error></Error>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/alltoys',
                    element:<AllToys></AllToys>
                  
                   
                },
                {
                    path:'/mytoys',
                    element:<MyToys></MyToys>
                },
                {
                    path:'/addtoy',
                    element:<AddToys></AddToys>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/blog',
                    element:<Blogs></Blogs>
                }
            ]
         }

  ])

  export default router