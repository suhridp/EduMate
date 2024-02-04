import React from "react";
import { NavLink } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
function Home() {
  return (
    <Slide cascade triggerOnce>
      <div className="bg-gradient-to-b from-blue-500 to-slate-50 min-h-screen flex justify-center items-center">
        <div className="relative">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu w-full overflow-hidden blur-3xl  sm:-top-80"
            aria-hidden="true"
          >
            {/* ... (Your existing background shape) */}
          </div>

          <div className="flex flex-col md:flex-row text-center md:justify-around items-center">
            <div className="max-w-2xl md:w-1/2 flex flex-col text-center md:text-left justify-center p-6 md:p-0">
              <h1 className="text-4xl mt-4 exsm:mt-20 sm:mt-44 lg:mt-4 font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to Edumate - Your Ultimate Study Companion
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unlock your academic potential with Edumate, a comprehensive
                platform designed to enhance your learning experience and make
                it hassle-free. Whether you're a college student or in school,
                Edumate is here to support you every step of the way.
              </p>
              <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <NavLink
                  to="/register"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </NavLink>
              </div>
            </div>
            <div className="my-10 md:my-0 md:w-1/2">
              <img
                className="w-full md:scale-125   sm:scale-150"
                src="./heroimg.png"
                alt="man with books"
              />
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            {/* ... (Your existing background shape) */}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Home;
