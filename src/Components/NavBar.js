import React, { useEffect, useRef, useState } from "react";
import logo from "../logo.jpg";
import { navigations } from "../Config/Config";
import { Link } from "react-router-dom";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import "../Components/NavBar.css";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const search = useRef(null);
  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  return (
    <div className="nav-bar w-screen bg-black flex items-center relative">
      <div className="nav flex items-center">
        <img src={logo} alt="logo image" className="w-[150px] ml-4" />
        <div
          className={`categories w-full lg:w-[700px] flex justify-between pl-[20px] ${
            isCollapsed ? "hidden lg:flex" : "flex flex-col lg:flex-row"
          }`}
        >
          <ul className="menu-container flex gap-5" onClick={handleNavClick}>
            {navigations.map((nav, index) => (
              <li
                key={index}
                className="transition ease-in-out hover:scale-110 "
              >
                <Link to={nav.page} className={`uppercase text-sm text-white`}>
                  {nav.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="menu-icon absolute right-5 lg:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <BiMenuAltRight size={30} className="text-white" />
        ) : (
          <BiX size={30} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
