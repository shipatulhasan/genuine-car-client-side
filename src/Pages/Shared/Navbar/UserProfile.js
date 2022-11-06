import React, { useState } from "react";
import toast from "react-hot-toast";

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const UserProfile = ({user,logOut}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = ()=>{
    logOut()
    .then(()=>{
      toast.success('Logout successfully')
    })
    .catch(err=>console.error(err))
  }
  

  return (
    <div className="relative">
      <button
        type="button"
        className="hiddle lg:flex items-center focus:outline-none"
        aria-label="toggle profile dropdown"
        onClick={()=>setIsOpen(!isOpen)}
      >
        
          <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center items-center overflow-hidden">
            {
              user?.photoURL ? <img className="h-full w-full object-cover"  src={user.photoURL} alt="" /> : <FaUser className="text-2xl" />
            }
            
          </div>
        
      </button>


    {
        isOpen && 
        <div
        
        className="absolute right-0 z-20 w-60 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl transition ease-out duration-100 dark:bg-gray-800"
    >
        <Link to="/" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <img className="flex-shrink-0 object-cover mr-2 rounded-full w-9 h-9 " src={user?.photoURL}alt="avatar" />
            <div className="mx-1">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user?.displayName}</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400" title={user?.email}>{user?.email}</p>
            </div>
        </Link>

        <hr className="border-gray-200 dark:border-gray-700"/>

        <Link to="/orders" className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            My orders
        </Link>
        <Link to="/" className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            view profile
        </Link>

        <Link className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        

            <span className="mx-1">
                Settings
            </span>
        </Link>

        <hr className="border-gray-200 dark:border-gray-700 " />

     
        <Link onClick={handleSignOut} className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          
            Sign Out
        </Link>
    </div>
    }
      
    </div>
  );
};

export default UserProfile;
