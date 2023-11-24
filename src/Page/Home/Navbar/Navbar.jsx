import { NavLink } from "react-router-dom";
import { FaAngellist } from "react-icons/fa";

const Navbar = () => {
  const navLink = (
    <div className="flex gap-5 items-center">
    <NavLink> <a>Item 1</a></NavLink>
    <NavLink> <a>Item 1</a></NavLink>
    <NavLink> <a>Item 1</a></NavLink>
    <NavLink> <a>Item 1</a></NavLink>
    <div>fuckk you</div>
     
     
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
          <a className=" text-xl"><FaAngellist /> <span>Learn<span>Hub</span></span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
