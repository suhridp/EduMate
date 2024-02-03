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
  const [attendance, setAttendence] = useState("75");
  const [assignment, setAssignment] = useState("50");
  const [marks, setMarks] = useState("90");
  const [date, setDate] = useState("12.01.2023");
  return (
    <div className="text-center">
      <span className="text-center">Profile</span>
      <div className="flex justify-evenly h-3/4">
        {" "}
        <div className="flex flex-col justify-evenly border-4 p-10 w-2/5 ">
          <div className="flex flex-col items-center justify-center">
            {" "}
            <img
              src="homepageImage.png"
              className="w-1/5 rounded-xl border-gray-700"
              alt="profile pic "
            />{" "}
            <top className="flex my-8 justify-evenly flex-col">
              {" "}
              <span> {name}</span>
              <span>
                {" "}
                {college},{collegelocation}
              </span>
              <span> Joined on {date}</span>{" "}
            </top>
          </div>

          <bottom className="flex  flex-col">
            <span>Email: {email}</span>
            <span>Phone: {phone}</span>
            <span>Year: {year}</span>
            <span>Department: {department}</span>
          </bottom>
        </div>{" "}
        <div className="flex flex-col justify-evenly items-center  border-4 p-10 w-2/5">
          <div className="flex flex-col justify-evenly items-end ">
            <span>
              Attendeance :{" "}
              <input
                className=""
                type="range"
                id="attendence"
                name="attendence"
                min="0"
                max="100"
                value={attendance}
                step="10"
              />
            </span>
            <span>
              Assignment:{" "}
              <input
                type="range"
                id="attendence"
                name="attendence"
                min="0"
                max="100"
                value={assignment}
                step="10"
              />
            </span>
            <span>
              Marks :{" "}
              <input
                type="range"
                id="attendence"
                name="attendence"
                min="0"
                max="100"
                value={marks}
                step="10"
              />
            </span>
          </div>
        </div>
      </div>{" "}
      <div>
        <span className="text-center mt-10">Documents </span>
        <div className="flex justify-evenly w-full">
          <div className="w-4/5 flex flex-col justify-evenly items-center">
            Marksheets
            <div className="bg-orange-200 w-4/5 align-middle">
              <button className="hover:bg-stone-400 p-4 m-4 w-2/5"> + </button>
            </div>
          </div>
          <div className="w-4/5  flex flex-col justify-evenly items-center">
            Personal Information
            <div className="bg-orange-200 w-4/5">
              {" "}
              <button className="hover:bg-stone-400 p-4 m-4 w-2/5"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
