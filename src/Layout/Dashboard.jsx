import { NavLink, Outlet } from "react-router-dom";
import { BsBuildingExclamation } from "react-icons/bs";
import { FaAd, FaAddressBook, FaHome, FaPlus, FaShoppingBag, FaUsers, FaUtensils  } from 'react-icons/fa';
import { FaAddressCard, FaCreditCard } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { RiFeedbackFill } from "react-icons/ri";
import { FaBookTanakh } from "react-icons/fa6"; 
import { IoIosMenu } from "react-icons/io";
// import useCart from "../Hooks/useCart";
import { MdOutgoingMail } from "react-icons/md";

import { TfiMenuAlt } from "react-icons/tfi";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { CgProfile } from "react-icons/cg";

import { axiosPublic } from "../Hooks/useAxiosPublic";
import { useQuery } from "react-query";


// import useAdmin from "../Hooks/useAdmin";

const Dashborad = () => {
    const [cart]=useCart();
  
      const [ isAdmin ]=useAdmin();
      // console.log(isAdmin);


   



    return (
       <div>
       
         <div className="flex">
          
          <div className="w-[500px]  min-h-screen bg-sky-400">
          <div className="mt-14  pl-16">
          <h1 className="  font-extrabold font-inter text-5xl">
          Learn<span className="bg-yellow-400 p-1 rounded">Hub</span>
          </h1>
          
        </div>

          <ul className="px-20 py-4" >
            
       
             {isAdmin ?  <>
                <li className=" items-center gap-2 mt-10 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaHome></FaHome></span>  <NavLink to="">Teacher Requset</NavLink></li>
              <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaUtensils /></span> <NavLink to="allusers">Users</NavLink></li>
              <li className=" items-center gap-2 mt-5  text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"> <TfiMenuAlt /></span><NavLink to="/dashboard/mangebooking">All classes</NavLink></li>
              <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaUsers /></span> <NavLink to="profile">Profile</NavLink></li>

                </> : <>
                <li className=" items-center gap-2 mt-10 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaHome></FaHome></span>  <NavLink to="enrollClass">My Enroll Class </NavLink></li>
              <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><CgProfile /></span> <NavLink to="profile"> Profile</NavLink></li>
              <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"> <FaPlus /></span><NavLink to="addclass">Add Class </NavLink></li>
      
             
              <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><RiFeedbackFill /></span> <NavLink to="assignment">Assignment</NavLink></li>

                </>} 
    
          
              <div className="divider divider-error"></div>
              {/* Shared Component or Public dehte parbe */}
              <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaHome></FaHome></span>  <NavLink to="/"> Home </NavLink></li>
              <li className=" items-center gap-2 mt-4 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><IoIosMenu /></span>  <NavLink to="/meanu"> All Class </NavLink></li>
         
          </ul>
          </div>
          <div className="flex-1">
              <Outlet></Outlet>
          </div>
      </div>
       </div>
    );
};

export default Dashborad;