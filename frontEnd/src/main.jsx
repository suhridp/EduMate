import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import Layout from "./Layout.jsx";
import Aboutus from "./Aboutus.jsx";
import Profile from "./Profile.jsx";
import Notes from "./Notes.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Schedule from "./Schedule.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="profile" element={<Profile />} />

      <Route path="schedule" element={<Schedule />} />
      <Route path="notes" element={<Notes />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-h0njyaiyuv4glhrb.us.auth0.com"
    clientId="NGHeRfF8EuzlYVzOxfUQuRCDqBASHb1z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
    </Auth0Provider>,
  </React.StrictMode>
);
