import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("Suhrid Paul");
  const [college, setCollege] = useState("Harvard University");
  const [collegelocation, setCollegelocation] = useState(
    "United States of America"
  );
  const [email, setEmail] = useState("abc@gmail.com");
  const [phone, setPhone] = useState("+915000255");
  const [department, setDepartment] = useState("Datascience");
  const [year, setYear] = useState("2nd");
  const [attendance, setAttendance] = useState(75);
  const [assignment, setAssignment] = useState(50);
  const [marks, setMarks] = useState(90);
  const [date, setDate] = useState("12.01.2023");

  return (
    <div className="text-center bg-gradient-to-b from-blue-500 to-slate-50">
      <span className="text-center text-2xl mt-2 text-blue-100">Profile</span>
      <div className="flex flex-col  items-center md:flex-row justify-evenly h-3/4">
        <div className="flex flex-col mb-4 justify-evenly border-4 p-10 w-5/6 md:w-2/6">
          <div className="flex flex-col items-center justify-center">
            <img
              src="homepageImage.png"
              className="w-1/2 md:w-1/5 rounded-xl border-gray-700"
              alt="profile pic"
            />
            <div className="flex my-8 justify-evenly flex-col">
              <span>{name}</span>
              <span>
                {college}, {collegelocation}
              </span>
              <span>Joined on {date}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span>Email: {email}</span>
            <span>Phone: {phone}</span>
            <span>Year: {year}</span>
            <span>Department: {department}</span>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center border-4 p-10 w-5/6 md:w-2/6">
          <div className="flex flex-col justify-evenly items-end">
            <span>
              Attendeance : {attendance}%
              <input
                type="range"
                id="attendance"
                name="attendance"
                min="0"
                max="100"
                value={attendance}
                onChange={(e) => setAttendance(parseInt(e.target.value))}
                step="10"
              />
            </span>
            <span>
              Assignment : {assignment}%
              <input
                type="range"
                id="assignment"
                name="assignment"
                min="0"
                max="100"
                value={assignment}
                onChange={(e) => setAssignment(parseInt(e.target.value))}
                step="10"
              />
            </span>
            <span>
              Marks : {marks}%
              <input
                type="range"
                id="marks"
                name="marks"
                min="0"
                max="100"
                value={marks}
                onChange={(e) => setMarks(parseInt(e.target.value))}
                step="10"
              />
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="text-center mt-10  text-2xl text-blue-900">
          Documents{" "}
        </span>
        <div className="flex justify-evenly flex-col md:flex-row items-center w-full">
          <div className="w-4/5 md:w-2/5 flex flex-col justify-evenly items-center">
            Marksheets
            <div className="bg-gradient-to-r from-slate-500 to-blue-100 w-4/5 align-middle">
              <button className="hover:bg-stone-400 p-4 m-4 w-2/5"> + </button>
            </div>
          </div>
          <div className="w-4/5 md:w-2/5 flex flex-col justify-evenly items-center">
            Personal Information
            <div className="bg-gradient-to-r  from-slate-500 to-blue-100 w-4/5">
              <button className="hover:bg-stone-400 p-4 m-4 w-2/5"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
