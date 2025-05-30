import React, { useState } from "react";

const Programs = () => {
  // State to manage the selected program
  const [selectedProgram, setSelectedProgram] = useState("");

  // List of available programs
  const programsList = [
    "Data Science",
    "Web Development",
    "Digital Marketing",
    "Machine Learning",
    "Cybersecurity",
    "Product Management",
    "UX/UI Design",
  ];

  const handleProgramChange = (e) => {
    setSelectedProgram(e.target.value); // Update selected program
  };

  const handleNextClick = () => {
    if (selectedProgram) {
      alert(`You have selected: ${selectedProgram}`);
      // Here you can navigate to the next step or page based on the program selected
    } else {
      alert("Please select a program");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Select Your Program
      </h1>

      {/* Program Dropdown */}
      <div className="mb-8">
        <select
          value={selectedProgram}
          onChange={handleProgramChange}
          className="w-full md:w-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="" disabled>
            -- Select a Program --
          </option>
          {programsList.map((program) => (
            <option key={program} value={program}>
              {program}
            </option>
          ))}
        </select>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Programs;
