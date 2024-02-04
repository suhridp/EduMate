<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// function Register() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [mobile_number, setMobile_number] = useState("");
//   const [name, setName] = useState("");

//   async function registerUser(ev){
//     ev.preventDefault();
//     try{
//      await axios.post('/register',{
//          name,
//          email,
//          username,
//          password,
//          mobile_number

//      });
//      alert('Registration Successful.Now you can login');
//     }
//     catch(e){
//                alert('Registration failed.Please try again later.');
//     }

// }
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
//   return (
//     <>
//       <div className="flex justify-center p-10 bg-gradient-to-b from-blue-500 to-slate-50 text-center items-center   bg-slate-100 ">
//         <div className="flex flex-col items-start h-96  justify-evenly ">
//           <span className="rounded text-slate-900 text-sm mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
//             Register to EduMate
//           </span>
//           <div className="text-start ">
//             <span className="text-2xl">Create an Account</span>
//             <p>already have an account?</p>
            // <Link to="/Login" className="font-bold underline">
            //   Sign in
            // </Link>
//           </div>
//           <form
//             // action="POST"
//             onSubmit={registerUser}
//           >
//             <span>
//               <label htmlFor="username" className="h-screen">
//                 Username :
//               </label>
//               <input
//                 onChange={(e) => {
//                   setUsername(e.target.value);
//                 }}
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="username"
//                 required
//                 minlength="4"
//                 maxlength="18"
//                 size="10"
//                 className=" rounded	"
//               />
//             </span>
//             <br />
//             <span>
//               <label htmlFor="name">Name :</label>
//               <input
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="name"
//                 required
//                 minlength="4"
//                 maxlength="18"
//                 size="10"
//                 className="	rounded"
//               />
//             </span>
//             <br />
//             <span>
//               <label htmlFor="email">Email Address :</label>
//               <input
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 type="text"
//                 id="email"
//                 name="email"
//                 placeholder="email"
//                 required
//                 minlength="4"
//                 maxlength="18"
//                 size="10"
//                 className="rounded"
//               />
//             </span>
//             <br />
//             <span>
//               <label htmlFor="password">Password :</label>
//               <input
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="password"
//                 required
//                 minlength="8"
//                 maxlength="18"
//                 size="10"
//                 className="	rounded"
//               />
//             </span>
//             <br />
//             <span>
//               <label htmlFor="mobile_number">Mobile :</label>
//               <input
//                 onChange={(e) => {
//                   setMobile_number(e.target.value);
//                 }}
//                 type="mobile_number"
//                 id="mobileno"
//                 name="mobileno"
//                 placeholder="mobile no."
//                 required
//                 minlength="10"
//                 maxlength="10"
//                 size="10"
//                 className="	rounded"
//               />
//             </span>
//             <br />
//             <span>
//               <button
//                 // onClick={submit}
//                 // type="submit"
//                 className="p-4 my-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300"
//               >
//                 Register
//               </button>
//             </span>
//           </form>
//         </div>
//         <div>
//           <img src="register1.png" alt="" className="scale-125" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
return (
  <div>
   <div>
   <Link to="/Login" className="font-bold underline">
              Sign in
            </Link>
   </div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} required />

      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} required />

      <label>Username:</label>
      <input type="text" name="username" onChange={handleChange} required />

      <label>Name:</label>
      <input type="text" name="fullName" onChange={handleChange} required />

      <label>Mobile Number:</label>
      <input type="text" name="mobile_number" onChange={handleChange} required />

      <button type="submit">Register</button>
    </form>
  </div>
);
};

export default Register;
=======
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
>>>>>>> c2f53fc8c344ea5c9b1759a5686c94f46a470961
