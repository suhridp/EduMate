// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// function Login() {
//   const history = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:8000/", {
//           email,
//           password,
//         })
//         .then((res) => {
//           if (res.data == "exist") {
//             history("/home", { state: { id: email } });
//           } else if (res.data == "notexist") {
//             alert("User have not sign up");
//           }
//         })
//         .catch((e) => {
//           alert("wrong details");
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-col  p-20  items-start h-96  justify-evenly ">
//         <span className="rounded text-slate-900 text-sm  mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
//           Login to EduMate
//         </span>
//         <div className="text-start my-4">
//           <span className="text-2xl">Create an Account</span>
//           <p>Don't have an account?</p>
//           <Link to="/register" className="font-bold underline">
//             Sign up
//           </Link>
//         </div>
//         <form action="POST">
//           <span>
//             <label htmlFor="username" className="h-screen">
//               Username :
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="username"
//               required
//               minlength="4"
//               maxlength="18"
//               size="10"
//               className=" rounded	"
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </span>
//           <span>
//             {" "}
//             <label htmlFor="password">Password :</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="password"
//               required
//               minlength="8"
//               maxlength="18"
//               size="10"
//               className="	rounded"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </span>

//           <span>
//             <input
//               type="submit"
//               onClick={submit}
//               className="mt-4 p-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300"
//             >
//               Login
//             </input>
//           </span>
//         </form>
//       </div>
//       <div>
//         <img src="heroimg.png" alt="" />
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await axios.post("http://localhost:8000/login", formData);

      if (response.data === "success") {
        alert("Login successful");
        // Redirect or handle success as needed
      } else if (response.data === "failure") {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

