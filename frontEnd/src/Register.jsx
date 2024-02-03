import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="flex p-10 justify-center p-4 bg-gradient-to-b from-blue-500 to-slate-50 text-center items-center   bg-slate-100 ">
        {" "}
        <div className="flex flex-col  items-start h-96  justify-evenly ">
          <span className="rounded text-slate-900 text-sm mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
            Register to EduMate
          </span>
          <div className="text-start ">
            <span className="text-2xl">Create an Account</span>
            <p>already have an account?</p>
            <Link to="/login" className="font-bold underline">
              Sign in
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
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
              minlength="4"
              maxlength="18"
              size="10"
              className="	rounded"
            />
          </span>
          <span>
            {" "}
            <label htmlFor="username">Email Address :</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              required
              minlength="4"
              maxlength="18"
              size="10"
              className="rounded"
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
            {" "}
            <label htmlFor="mobile number">Mobile :</label>
            <input
              type="mobile number"
              id="mobileno"
              name="mobileno"
              placeholder="mobile no."
              required
              minlength="10"
              maxlength="10"
              size="10"
              className="	rounded"
            />
          </span>
          <span>
            <button className="p-4 my-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300">
              {" "}
              Register{" "}
            </button>
          </span>
        </div>{" "}
        <div>
          <img src="register1.png" alt="" className="scale-125" />
        </div>
      </div>
    </>
  );
}

export default Register;
