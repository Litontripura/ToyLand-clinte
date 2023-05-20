import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

import Error from "../layouts/Error/Error";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Register from "../layouts/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../layouts/Login/Login";
import SingleToy from "../pages/AllToys/SingleToy";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/Update/Update";


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
                    path:'/alltoys',
                    element:<AllToys></AllToys>
                  
                   
                },
                {
                    path:'/alltoys/:id',
                    element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                    loader:({params})=>fetch(`https://assignment-11-server-five-omega.vercel.app/singletoy/${params.id}`)

                },
                {
                    path:'/mytoys',
                    element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
                },
                {
                    path:'/addtoy',
                    element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/blog',
                    element:<Blogs></Blogs>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/update/:id',
                    element:<Update></Update>,
                    loader:({params})=>fetch(`https://assignment-11-server-five-omega.vercel.app/toys/${params.id}`)
                }
            ]
         }

  ])

  export default router