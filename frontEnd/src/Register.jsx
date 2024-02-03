import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [name, setName] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
          username,
          mobile_number,
          name,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="flex justify-center p-10 bg-gradient-to-b from-blue-500 to-slate-50 text-center items-center   bg-slate-100 ">
        <div className="flex flex-col items-start h-96  justify-evenly ">
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
          <form action="POST">
            <span>
              <label htmlFor="username" className="h-screen">
                Username :
              </label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
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
            <br />
            <span>
              <label htmlFor="name">Name :</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
            <br />
            <span>
              <label htmlFor="email">Email Address :</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
            <br />
            <span>
              <label htmlFor="password">Password :</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
            <br />
            <span>
              <label htmlFor="mobile_number">Mobile :</label>
              <input
                onChange={(e) => {
                  setMobile_number(e.target.value);
                }}
                type="mobile_number"
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
            <br />
            <span>
              <button className="p-4 my-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300">
                Register
              </button>
            </span>
          </form>
        </div>
        <div>
          <img src="register1.png" alt="" className="scale-125" />
        </div>
      </div>
    </>
  );
}

export default Register;
