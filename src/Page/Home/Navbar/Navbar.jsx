import {  Link, NavLink } from "react-router-dom";
import { FaAngellist } from "react-icons/fa";
import Login from "../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

import toast, { Toaster } from "react-hot-toast";
import userImg from "../../../assets/Collabration/download.png"

const Navbar = () => {
    const  {user,logout}  = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () => {
        logout().then((result) => {
          toast.success("Log Out SuccessFull", {
            duration: 5000,
          });
          console.log(result);
        });
      };

  const navLink = (
    <div className="flex flex-col lg:flex-row  gap-8 items-start lg:items-center font-inter font-semibold  text-xl">
        <Toaster></Toaster>
    <NavLink to='/' className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold px-2 py-1 rounded bg-yellow-400"
            : " font-inter text-xl "
        }> <a>Home</a></NavLink>
    <NavLink to='/allClasses' className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold px-2 py-1 rounded bg-yellow-400"
            : " font-inter text-xl "
        }> <a>All Calsses</a></NavLink>
    <NavLink to='/teachonlearnhub' className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold px-2 py-1 rounded bg-yellow-400"
            : " font-inter text-xl "
        }> <a>Teach on Learn<span>Hub</span></a></NavLink>

    
     
     
    </div>
  );

  return (
    <div>
      <div className="navbar  bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className=" drop-shadow-lg flex items-center font-inter font-bold gap-1 text-4xl"><span className="text-4xl "><FaAngellist /></span> <span>Learn<span className="bg-[#ffd24d] p-1 rounded  text-black">Hub</span></span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          
         {
            <div className="ml-28 md:ml-56 lg:ml-3 ">
            {user ? (
             
                <div>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL || userImg }
                        />
                       
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2   shadow menu menu-sm dropdown-content bg-yellow-400 rounded-box w-52"
                    >
                      <li>
                        <a className="justify-between font-inter text-xl">{user?.displayName}</a>
                      </li>
                      <li>
                        <NavLink to='/cart' className="justify-between font-inter text-xl">My Cart</NavLink>
                      </li>
                      <li>
                        <NavLink to='teachonlearnhub' className="justify-between font-inter text-xl">Post a Class</NavLink>
                      </li>
                      <li>
                        <NavLink to='/dashboard/enrollClass' className="justify-between font-inter text-xl">User Dashboard</NavLink>
                      </li>
  
                      <li className="" >
                        <a onClick={handleLogout} className="font-inter text-2xl">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
          
            ) : (
              
<div>
<button  onClick={()=>document.getElementById('my_modal_3').showModal()}><a className="bg-gradient-to-r from-yellow-500  px-3 font-inter rounded font-semibold text-xl cursor-pointer py-2">Log in</a></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   <div>
    <Login></Login>
   


   </div>
  </div>
</dialog>
</div>
            )}
          </div> 
         }



    
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
