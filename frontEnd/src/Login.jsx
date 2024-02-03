import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col  p-20  items-start h-96  justify-evenly ">
        <span className="rounded text-slate-900 text-sm  mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
          Login to EduMate
        </span>
        <div className="text-start my-4">
          <span className="text-2xl">Create an Account</span>
          <p>Don't have an account?</p>
          <Link to="/register" className="font-bold underline">
            Sign up
          </Link>
        </div>
        <span>
          <label htmlFor="username" className="h-screen">
            Username :
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
            minlength="4"
            maxlength="18"
            size="10"
            className=" rounded	"
          />
        </span>
        <span>
          {" "}
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
            minlength="8"
            maxlength="18"
            size="10"
            className="	rounded"
          />
        </span>
        <span>
          <button className="mt-4 p-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300">
            {" "}
            Login{" "}
          </button>
        </span>
      </div>{" "}
      <div>
        <img src="heroimg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
