import { Menu } from "lucide-react";
import "./navbar.css";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed-books">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pages-to-read">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <nav className="py-2 sticky top-0 z-50 bg-base-100 shadow-sm text-black">
      <div className="navbar md:w-11/12 2xl:w-10/12 mx-auto">
        <div className="navbar-start">
          <a className="text-3xl font-semibold">Book Vibe</a>
        </div>
        {/* desktop menu  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 text-xl ">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex items-center gap-6 ">
            <div className="flex items-center gap-3">
              <button className="btn rounded-lg bg-[#23BE0A] text-lg text-white p-6">
                Sign In
              </button>
              <button className="btn rounded-lg bg-[#59C6D2] text-lg text-white p-6">
                Sign Up
              </button>
            </div>
          </div>

          {/* mobile menu  */}
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text"
            >
              {links}
              <Link>Sign In</Link>
              <Link>Sign Up</Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
