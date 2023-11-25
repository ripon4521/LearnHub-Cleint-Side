import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllClasses from "../Page/AllClasses/AllClasses/AllClasses";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
            path:'/allClasses',
            element:<AllClasses></AllClasses>
        }
    ] }])