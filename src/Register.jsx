import React from "react";
import { Link } from "react-router-dom";
import "./Styles//Register.css";
function Register() {
  return (
    <>
      <div className="flex flex-col sm:flex-row p-10 justify-center bg-gradient-to-b from-blue-500 to-slate-50 text-center items-center bg-slate-100 ">
        {" "}
        <div className="flex flex-col z-30 relative top-[2.5rem] items-start h-96 justify-evenly sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
          <span className="rounded text-slate-900 text-sm mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
            Register to EduMate
          </span>
          <div className="text-start">
            <span className="text-2xl">Create an Account</span>
            <p>already have an account?</p>
            <Link to="/login" className="font-bold underline">
              Sign in
            </Link>
          </div>
          <span className="m-1">
            <label htmlFor="username" className="h-screen">
              Username :
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
              minLength="4"
              maxLength="18"
              size="10"
              className="rounded mx-3"
            />
          </span>
          <span className="m-1">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
              minLength="4"
              maxLength="18"
              size="10"
              className="rounded mx-3"
            />
          </span>
          <span className="m-1">
            {" "}
            <label htmlFor="username">Email Address :</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              required
              minLength="4"
              maxLength="18"
              size="10"
              className="rounded mx-3"
            />
          </span>

          <span className="m-1">
            {" "}
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
              className="rounded mx-3"
            />
          </span>
          <span className="m-1">
            {" "}
            <label htmlFor="mobile number">Mobile :</label>
            <input
              type="mobile number"
              id="mobileno"
              name="mobileno"
              placeholder="mobile no."
              required
              minLength="10"
              maxLength="10"
              size="10"
              className="rounded mx-3"
            />
          </span>
          <span className="m-1">
            <button className="p-4 my-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300">
              {" "}
              Register{" "}
            </button>
          </span>
        </div>{" "}
        <div className="">
          {/* Show the image only on screens wider than small (sm) and position it to the left */}
          <img src="register1.png" alt="" className="scale-125" />
        </div>
      </div>
    </>
  );
}

export default Register;
