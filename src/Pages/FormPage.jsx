import React, { useState } from "react";

const FormPage = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("personalBackground");

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 p-6">
      {/* Tabs on the left */}
      <div className="w-1/4">
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleTabChange("personalBackground")}
            className={`py-2 px-4 border ${
              activeTab === "personalBackground"
                ? "bg-blue-100 border-blue-600"
                : "bg-white"
            }`}
          >
            Personal Background
          </button>
          <button
            onClick={() => handleTabChange("educationalIndustryInterest")}
            className={`py-2 px-4 border ${
              activeTab === "educationalIndustryInterest"
                ? "bg-blue-100 border-blue-600"
                : "bg-white"
            }`}
          >
            Educational and Industry Interest
          </button>
          <button
            onClick={() => handleTabChange("cvUploadReferee")}
            className={`py-2 px-4 border ${
              activeTab === "cvUploadReferee"
                ? "bg-blue-100 border-blue-600"
                : "bg-white"
            }`}
          >
            CV Upload and Referee
          </button>
        </div>
      </div>

      {/* Form on the right */}
      <div className="w-3/4 p-6 bg-white shadow rounded-lg">
        {activeTab === "personalBackground" && <PersonalBackgroundForm />}
        {activeTab === "educationalIndustryInterest" && (
          <EducationalIndustryInterestForm />
        )}
        {activeTab === "cvUploadReferee" && <CvUploadRefereeForm />}
      </div>
    </div>
  );
};

// Personal Background Form
const PersonalBackgroundForm = () => (
  <form>
    <h2 className="text-xl font-bold mb-6">Personal Background</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label>First Name</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div>
        <label>Middle Name</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div>
        <label>Last Name (Family)</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" className="w-full p-2 border" />
      </div>
      <div>
        <label>Phone Contact</label>
        <input type="tel" className="w-full p-2 border" />
      </div>
      <div>
        <label>Gender</label>
        <select className="w-full p-2 border">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Marital Status</label>
        <select className="w-full p-2 border">
          <option value="">Select Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
      </div>
      <div>
        <label>Nationality</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" className="w-full p-2 border" />
      </div>
      <div>
        <label>Country of Residence</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div>
        <label>Region</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div>
        <label>Any Disability?</label>
        <div className="flex items-center space-x-4">
          <label>
            <input type="radio" name="disability" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="disability" value="no" /> No
          </label>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <label>If yes, please specify</label>
      <input type="text" className="w-full p-2 border" />
    </div>
    <div className="mt-6">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save and Continue
      </button>
    </div>
  </form>
);

// Educational and Industry Interest Form
const EducationalIndustryInterestForm = () => (
  <form>
    <h2 className="text-xl font-bold mb-6">
      Educational and Industry Interest
    </h2>
    {/* Add your form fields here */}
    <div className="mt-6">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save and Continue
      </button>
    </div>
  </form>
);

// CV Upload and Referee Form
const CvUploadRefereeForm = () => (
  <form>
    <h2 className="text-xl font-bold mb-6">CV Upload and Referee</h2>
    {/* Add your form fields here */}
    <div className="mt-6">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save and Continue
      </button>
    </div>
  </form>
);

export default FormPage;
