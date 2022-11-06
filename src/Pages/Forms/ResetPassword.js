import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img from "../../asset/login/login.svg";

const ResetPassword = () => {

    const {resetPass} = useContext(AuthContext)
    
  const handleReset = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    resetPass(email)
    .then(()=>{
      toast(
        "Please check your email if you don't get it please check your spam folder.\n\n Thank you. ",
        {
          duration: 6000,
        }
      );
    })
    .catch(err=>console.error(err))
    

  }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-8 ">
      <div className="grid md:grid-cols-2 items-center">
        <img src={img} alt="" />
        <div className="w-full max-w-lg justify-center">
          <div className="border border-slate-200 shadow-xl dark:bg-gray-900 dark:text-gray-100 space-y-3 p-8 ">
          <h1 className="text-2xl font-bold text-center">Reset Password</h1>
          <form
            onSubmit={handleReset}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
           
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-400 ">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jhon@gmail.com"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 border border-slate-300 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400"
              />
            </div>
          
            <button className="block bg-orange border border-orange text-white w-full p-3 text-sm font-bold text-center rounded hover:bg-white hover:text-orange dark:text-gray-900 dark:bg-sky-400 uppercase">
              Reset Password
            </button>
          </form>
        
          <p className="text-sm font-bold text-center sm:px-6 dark:text-gray-400">
            Back to Login ?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline dark:text-gray-100 text-orange"
            >
              {" "}
              Log in
            </Link>
          </p>
        </div>
          </div>
            
        </div>
        </div>
    );
};

export default ResetPassword;