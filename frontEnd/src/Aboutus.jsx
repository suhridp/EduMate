import React from "react";

function Aboutus() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-slate-50">
      {" "}
      <>
        <div>
          <div className="text-center">
            <h1 className="text-2xl p-4 font-bold tracking-tight text-gray-900 pt-4 sm:text-3xl">
              Welcome to Edumate - Your Ultimate Study Companion
            </h1>
            <p className="mt-6 text-lg leading-8 m-20 text-gray-600">
              Unlock your academic potential with Edumate, a comprehensive
              platform designed to enhance your learning experience and make it
              hassle free. Whether you're a college student or in school,
              Edumate is here to support you every step of the way.
            </p>
          </div>
        </div>
        <div className="flex  flex-wrap gap-5  justify-center ">
          <div className="rounded w-2/5  p-8 m-4 bg-gradient-to-b from-blue-400 to-blue-50 mx-2">
            <h1 className="text-xl p-4 font-bold">Key Feature</h1>
            <div className="my-2">
              <span className="font-bold">1. Assignment Management: </span>
              Effortlessly organize and keep track of your assignments. Edumate
              ensures you never miss a deadline.
            </div>
            <div className="my-2">
              <span className="font-bold">2. Centralized Notes: </span>E Access
              your study materials from one convenient location. Say goodbye to
              scattered notes and hello to streamlined studying.
            </div>
            <div className="my-2">
              <span className="font-bold">3. Digital Books: </span>
              Dive into your courses with our extensive digital library. Access
              textbooks and reading materials with just a few clicks.
            </div>
            <div className="my-2">
              <span className="font-bold">4. Attendance Monitoring: </span>
              Dive into your courses with our extensive digital library. Access
              textbooks and reading materials with just a few clicks.
            </div>
          </div>
          <div className="rounded w-2/5 p-8 m-4 bg-gradient-to-b from-blue-400 to-blue-50 mx-2">
            <h1 className="text-xl p-4 font-bold">Why to choose EduMate?</h1>
            <div className="my-2">
              <span className="font-bold">Simplicity :</span>Edumate simplifies
              your academic life, allowing you to focus on what matters most –
              your education.
            </div>
            <div className="my-2">
              <span className="font-bold">Efficiency : </span> Save time and
              energy with our user-friendly interface and time-saving features.
            </div>
            <div className="my-2">
              <span className="font-bold"> Success : </span>
              Join a community of successful students who rely on Edumate to
              excel in their studies.
            </div>
          </div>
          <span className="mx-2 text-orange-950 font-bold">
            Embark on your educational journey with Edumate. Learn, grow, and
            succeed.
          </span>
          <div className="m-20 rounded p-16  text-lg bg-gradient-to-b from-blue-400 to-blue-50 ">
            <h2 className="text-2xl p-4 font-bold">
              {" "}
              Future Connectivity: Connecting Students, Fostering Community{" "}
            </h2>
            <div className="mx-2 my-6 p-4">
              At Edumate, we believe in the power of collaboration and
              community. While our current focus is on providing you with the
              best tools for academic success, we dream of a future where
              connectivity goes beyond coursework.
            </div>
            <div className="mx-2 my-6 p-4">
              <br /> <span className="mx-2 font-bold">Our Vision:</span> In the
              coming phases of Edumate, we are excited about the prospect of
              introducing features that allow students to connect with each
              other. Imagine a space where you can share insights, ask
              questions, and collaborate with peers who share your educational
              journey. <br />
            </div>
            <div className="mx-2 my-6 p-4">
              <span className="mx-2  font-bold">
                Building a Global Network:
              </span>{" "}
              Our vision extends beyond the classroom. We aspire to create a
              global network of learners, where students from different corners
              of the world can come together, exchange ideas, and learn from
              diverse perspectives. This future connectivity feature aims to
              enrich your learning experience and expand your horizons.
              <br />
            </div>
            <div className="mx-2 my-6 p-4">
              <span className="mx-2 font-bold">
                Community-driven Learning:{" "}
              </span>{" "}
              Education is not just about textbooks and assignments; it's also
              about the relationships and connections we build along the way.
              With future connectivity on Edumate, we aim to foster a sense of
              community-driven learning, empowering you to learn not just from
              content but from each other.
              <br />
            </div>
            <div className="mx-2 my-6 p-4">
              <span className="mx-2  font-bold">Stay Tuned:</span> While these
              exciting features are on the horizon, we are committed to
              continually enhancing your Edumate experience. Stay tuned for
              updates as we work towards building a platform that not only
              supports your academic journey but also connects you with a global
              community of learners. The future of connectivity is bright, and
              we can't wait to bring these possibilities to life with you.
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Aboutus;
