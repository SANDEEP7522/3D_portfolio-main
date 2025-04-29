import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/045/952/021/original/maddie_creates-600x600.gif?1643923145"
          alt="logo"
          className="w-15 h-10 object-contain glassmorphism "
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
