import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from '../../../asset/brand/logo.png'
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  
  const menuList = (
    <>
      
        <NavLink to="/home">
          {({ isActive })=>

          <li className={`${isActive ?'text-orange':'text-black'} hover:text-orange mr-5 font-bold`}>Home</li>
          }
          </NavLink>
        <NavLink to="/about">
          {({ isActive })=>

          <li className={`${isActive ?'text-orange':'text-black'} hover:text-orange mr-5 font-bold`}>About</li>
          }
          </NavLink>
        <NavLink to="/services">
          {({ isActive })=>

          <li className={`${isActive ?'text-orange':'text-black'} hover:text-orange mr-5 font-bold`}>Services</li>
          }
          </NavLink>
        <NavLink to="/blog">
          {({ isActive })=>

          <li className={`${isActive ?'text-orange':'text-black'} hover:text-orange mr-5 font-bold`}>Blog</li>
          }
          </NavLink>
        <NavLink to="/contact">
          {({ isActive })=>

          <li className={`${isActive ?'text-orange':'text-black'} hover:text-orange  font-bold`}>Contact</li>
          }
          </NavLink>
       
    </>
  );
  return (
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList}
            <Link className="btn">Get started</Link>
          </ul>
        </div>
        <Link><img className="w-20 ml-3 lg:ml-0" src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuList}</ul>
      </div>
      <div className="navbar-end space-x-5">
        {
          user ? <UserProfile user={user} logOut={logOut} /> :<NavLink to="/login">
          {({ isActive })=>

          <p className={`${isActive ?'text-orange':'text-black'} hover:text-orange mr-3 font-bold`}>Login</p>
          }
          </NavLink>
        }
        <Link className="hidden lg:flex btn">Get started</Link>
      </div>
    </div>
  );
};

export default Navbar;
