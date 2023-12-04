import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllClasses from "../Page/AllClasses/AllClasses/AllClasses";
import Regester from "../Page/Home/Regeister/Regester";
import Teaching from "../Page/Teaching/Teaching/Teaching";
import Cart from "../Page/Cart/Cart";
import Dashborad from "../Layout/Dashboard";
import Mycart from "../dashboard/Mycart";
import AllUsers from "../dashboard/Admin/AllUsers/AllUsers";
import AddClass from "../dashboard/User/AddClass";
import EnrollClass from "../dashboard/User/EnrollClass";
import Assignment from "../dashboard/User/Assignment";
import Profile from "../dashboard/Profile/Profile";
import TeachersReq from "../dashboard/Admin/TeachersReq/TeachersReq";
import Login from "../Page/Login/Login";
import Classes from "../dashboard/Admin/AllUsers/Classes";






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
        },{
            path:'/teachonlearnhub',
            element:<Teaching></Teaching>
        },
        {
            path:'/login',
            element:<Login></Login>
        }

    ] },{
        path:'/dashboard',
        element:<Dashborad></Dashborad>,
        children:[
            {
                path:'mycart',
                element:<Mycart></Mycart>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },{
                path:'addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'enrollClass',
                element:<EnrollClass></EnrollClass>
            },{
                path:'assignment',
                element:<Assignment></Assignment>
            },{
                path:'profile',
                element:<Profile></Profile>
            },{
                path:'assignment',
                element:<Assignment></Assignment>
            },{
                path:'teacherRequest',
                element:<TeachersReq></TeachersReq>
            },{
                path:'classes',
                element:<Classes></Classes>
            }
        ]
    }


])