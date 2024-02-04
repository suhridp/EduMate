import React, { useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [fileInput, setFileInput] = useState(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newNotes = [...notes];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newNotes.push({
          type: file.type.includes('image') ? 'image' : 'pdf',
          data: e.target.result,
        });
        setNotes(newNotes);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Notes Section</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <input
          type="file"
          accept=".pdf, .png, .jpg, .jpeg"
          multiple
          className="hidden"
          ref={(input) => setFileInput(input)}
          onChange={handleFileChange}
        />
        <button
          onClick={() => fileInput && fileInput.click()}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Notes
        </button>
        {notes.map((note, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative overflow-hidden"
          >
            <div className="relative bg-white rounded-md shadow-md overflow-hidden">
              {note.type === 'image' ? (
                <img
                  src={note.data}
                  alt={`Image Note ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c3.31 0 6 2.69 6 6 0 1.38-.47 2.64-1.25 3.64m-1.64-5.71a8.962 8.962 0 0 0-3.64 0m-2.12 1.28A6.965 6.965 0 0 1 5 12c0-1.54.5-2.96 1.36-4.12m2.12-1.28L9 8l-1.36 1.36M12 20c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
                    ></path>
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <a
                  href={note.data}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
