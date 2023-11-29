import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllClasses from "../Page/AllClasses/AllClasses/AllClasses";
import Regester from "../Page/Home/Regeister/Regester";
import Teaching from "../Page/Teaching/Teaching/Teaching";
import Cart from "../Page/Cart/Cart";
import Dashborad from "../Layout/Dashboard";
import Mycart from "../dashboard/Mycart";





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
        },
        {
            path:'/register',
            element:<Regester></Regester>
        },{
            path:'/startTeaching',
            element:<Teaching></Teaching>
        },{
            path:'/cart',
            element:<Cart></Cart>
        }

    ] },{
        path:'/dashboard',
        element:<Dashborad></Dashborad>,
        children:[
            {
                path:'mycart',
                element:<Mycart></Mycart>
            }
        ]
    }


])