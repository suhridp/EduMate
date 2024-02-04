import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Styles//Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    mobile_number: "",
    fullName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData
      );

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        alert("Registration successful");
        // Redirect or handle success as needed
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row p-10 justify-center bg-gradient-to-b from-blue-500 to-slate-50 text-center items-center bg-slate-100 ">
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
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <span className="m-1">
              <label>Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                minLength="4"
                maxLength="18"
                size="10"
                className="rounded mx-3"
                onChange={handleChange}
                required
              />
            </span>
            <span className="m-1">
              <label>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                minLength="8"
                maxLength="18"
                size="10"
                className="rounded mx-3"
                onChange={handleChange}
                required
              />
            </span>

            <span className="m-1">
              <label>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                minlength="4"
                maxlength="18"
                size="10"
                className=" rounded"
                onChange={handleChange}
                required
              />
            </span>
            <span className="m-1">
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                minLength="4"
                maxLength="18"
                size="10"
                className="rounded mx-3"
                onChange={handleChange}
                required
              />
            </span>

            <span className="m-1">
              <label>Mobile Number:</label>
              <input
                type="number"
                id="mobileno"
                name="mobileno"
                placeholder="mobile no."
                minLength="10"
                maxLength="10"
                size="10"
                className="rounded mx-3"
                onChange={handleChange}
                required
              />
            </span>
            <button
              type="submit"
              className="p-1 w-3/4 self-center rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300"
            >
              Register
            </button>
          </form>
        </div>
        <div className="">
          {/* Show the image only on screens wider than small (sm) and position it to the left */}
          <img src="register1.png" alt="" className="scale-125" />
        </div>
      </div>
    </>
  );
};

export default Register;
