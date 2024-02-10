import React from "react";

import { useState } from "react";

function Schedule() {

  const [editMode, setEditMode] = useState(false);

 

  const days = [

    {

      name: "Monday",

      schedule: [

        { time: "8:00 AM - 10:00 AM", subject: "Math" },

        { time: "10:30 AM - 12:30 PM", subject: "Chemistry" },

      ],

    },

    {

      name: "Tuesday",

      schedule: [

        { time: "9:00 AM - 11:00 AM", subject: "Physics" },

        { time: "11:30 AM - 1:30 PM", subject: "History" },

      ] /* Add schedule items for Tuesday */,

    },

    {

      name: "Wednesday",

      schedule: [

        { time: "8:45 AM - 10:45 AM", subject: "Geography" },

        { time: "11:15 AM - 1:15 PM", subject: "English I" },

      ] /* Add schedule items for Wednesday */,

    },

    {

      name: "Thursday",

      schedule: [

        { time: "8:00 AM - 9:00 AM", subject: "Sports" },

        { time: "9:30 AM - 11:30 PM", subject: "Computer" },

      ] /* Add schedule items for Thursday */,

    },

    {

      name: "Friday",

      schedule: [

        { time: "8:45 AM - 11:45 AM", subject: "English -II" },

        { time: "12:15 AM - 2:15 PM", subject: "2nd Language" },

      ] /* Add schedule items for Friday */,

    },

  ];

  const handleEditClick = (dayIndex, itemIndex) => {

    // Implement your logic to handle edit mode

    setEditMode(true);

    // You can use the dayIndex and itemIndex to identify the specific schedule item

  };

  const handleSaveClick = () => {

    // Implement your logic to save changes

    setEditMode(false);

  };

 

  return (

    <div className="max-w-xl mx-auto p-6 bg-blue-100 rounded-md shadow-md">

      <h2 className="text-2xl font-bold mb-4">Weekly Schedule</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {days.map((day, index) => (

          <div key={index} className="bg-white p-4 rounded-md shadow-md">

            <h3 className="text-xl font-bold mb-2">{day.name}</h3>

            <ul>

              {day.schedule.map((item, i) => (

                <li key={i} className="mb-1">

                  {editMode ? (

                    <>

                      <input

                        type="text"

                        value={item.time}

                        onChange={(e) => console.log(e.target.value)} // Update with your state handling logic

                        className="border-b border-gray-500 focus:outline-none focus:border-blue-500 mr-2"

                      />

                      <input

                        type="text"

                        value={item.subject}

                        onChange={(e) => console.log(e.target.value)} // Update with your state handling logic

                        className="border-b border-gray-500 focus:outline-none focus:border-blue-500"

                      />

                      <button

                        onClick={handleSaveClick}

                        className="ml-2 text-blue-500 hover:underline"

                      >

                        Save

                      </button>

                    </>

                  ) : (

                    <>

                      <span className="font-semibold">{item.time}:</span>{" "}

                      {item.subject}

                      <button

                        onClick={() => handleEditClick(dayIndex, itemIndex)}

                        className="ml-2 text-blue-500 hover:underline"

                      >

                        Edit

                      </button>

                    </>

                  )}

                  <span className="font-semibold">{item.time}:</span>{" "}

                  {item.subject}

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </div>

  );

}

 

export default Schedule;
