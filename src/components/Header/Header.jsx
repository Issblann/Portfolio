import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ESFlag from "../../assets/Header/ES-FLAG.svg";
import VectorGithub from "../../assets/Header/Vector-github.svg";
import {
  HiOutlineArrowSmRight,
  HiOutlineX,
  HiOutlineMenu,
} from "react-icons/hi";

import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        e.target.className !== "menu-icon" &&
        e.target.tagName !== "A"
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.addEventListener("click", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <header className="w-full  bg-Secondary h-16 z-10 fixed px-7 ">
      <div className="max-w-screen-2xl flex items-center h-full justify-between mx-auto">
        <div className="flex">
          <h1 className="text-textbody font-SourceSansPro ">Ana.Dev</h1>
        </div>

        <nav className="flex items-center gap-7 ">
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-1 px-3  cursor-pointer md:hidden menu-icon"
          >
            {open ? (
              <HiOutlineX fontSize="20px" style={{ zIndex: 100 }} />
            ) : (
              <HiOutlineMenu fontSize="20px" />
            )}
          </div>
          <ul
            className={`md:flex md:flex-row md:items-center md:bg-Secondary bg-SecondaryLight h-screen md:h-auto absolute md:static gap-8 flex items-center justify-center  py-4  text-textsmall flex-col font-SourceSansPr  md:mt-0 w-full md:w-auto right-0 transition-all duration-400 ease-in-out ${
              open ? "left-0 top-[60px]" : "right-full top-[60px]"
            } `}
          >
            <NavLink onClick={closeMenu} className="text-white " to="/">
              Home
            </NavLink>
            <NavLink onClick={closeMenu} to="/About">
              About
            </NavLink>
            <NavLink onClick={closeMenu} to="/Work">
              Work
            </NavLink>
            <div className="flex">
              <button
                onClick={closeMenu}
                className="flex items-center py-3 px-5 h-[39px] rounded-md md:hidden text-textsmall font-SourceSansPro"
              >
                Contact Me
                <span className="ml-1">
                  <HiOutlineArrowSmRight fontSize="14px" />
                </span>
              </button>
            </div>
          </ul>

          <div className="flex gap-4">
            <img
              className=" cursor-pointer"
              src={VectorGithub}
              alt="VectorGithub"
            />
            <img className=" cursor-pointer" src={ESFlag} alt="ESFlag" />
          </div>

          <div className="flex">
            <button className="flex items-center bg-Primary py-3 px-5 button h-[39px] rounded-md text-textsmall font-SourceSansPro">
              Contact Me
              <span className="ml-1">
                <HiOutlineArrowSmRight />
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
