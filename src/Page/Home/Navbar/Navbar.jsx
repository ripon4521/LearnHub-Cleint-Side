import { NavLink } from "react-router-dom";
import { FaAngellist } from "react-icons/fa";

const Navbar = () => {
  const navLink = (
    <div className="flex  gap-8 items-center font-inter font-semibold  text-xl">
    <NavLink to='/' className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold px-2 py-1 rounded bg-yellow-400"
            : " font-inter text-xl text-white"
        }> <a>Home</a></NavLink>
    <NavLink to='/allClasses' className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold text-yellow-400"
            : " font-inter text-xl "
        }> <a>All Calsses</a></NavLink>
    <NavLink to='/tech' className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold text-yellow-400"
            : " font-inter text-xl "
        }> <a>Teach on Learn<span>Hub</span></a></NavLink>

    
     
     
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
          <a className=" drop-shadow-lg flex items-center font-inter font-bold gap-1 text-4xl"><span className="text-4xl "><FaAngellist /></span> <span>Learn<span className="text-[#ffd24d]">Hub</span></span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="bg-yellow-400 px-3 font-inter rounded font-semibold text-xl cursor-pointer py-2">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
