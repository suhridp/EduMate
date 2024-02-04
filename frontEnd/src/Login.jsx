import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Login.css";
function Login() {
  return (
    <div className="flex  flex-wrap bg-gradient-to-b from-blue-500 to-slate-50 justify-center items-center">
      <div className="flex flex-col p-8 sm:p-12 md:p-16 lg:p-20 items-start sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
        <span className="rounded text-slate-900 text-sm mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
          Login to EduMate
        </span>
        <div className="text-start my-4">
          <span className="text-2xl">Create an Account</span>
          <p>Don't have an account?</p>
          <Link to="/register" className="font-bold underline">
            Sign up
          </Link>
        </div>
        <span className="m-1">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
            minLength="4"
            maxLength="18"
            size="10"
            className="rounded m-1"
          />
        </span>
        <span className="m-1">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
            minLength="8"
            maxLength="18"
            size="10"
            className="rounded m-1"
          />
        </span>
        <span>
          <button className="mt-4 p-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300">
            Login
          </button>
        </span>
      </div>
      <div className=" sm:block ">
        {/* Show the image only on screens wider than small (sm) and position it to the left */}
        <img src="heroimg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
