import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-t from-indigo-300 to-slate-100 border-gray-200 delay-1000	transition-shadow	ease-in-out	 rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <NavLink
              to="/home"
              className={
                "transition ease-in-out delay-150 text-gray-700 rounded bg-blue-100 p-3 font-semibold text-xl hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:text-gray-100 duration-300 ..."
              }
            >
              EduMate
            </NavLink>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <NavLink to="/aboutus" className="hover:underline me-4 md:me-6">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" className="hover:underline me-4 md:me-6">
                  {" "}
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" className="hover:underline me-4 md:me-6">
                  Licensing
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" className="hover:underline me-4 md:me-6">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Edumate™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
