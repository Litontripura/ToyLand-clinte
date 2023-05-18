import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Error from "../layouts/Error/Error";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";


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
                }
            ]
         }

  ])

  export default router