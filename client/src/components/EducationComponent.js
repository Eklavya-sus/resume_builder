// components/EducationComponent.js
import React, { useState } from 'react';

function EducationComponent({ prevStep,nextStep }) {
  const [educationData, setEducationData] = useState([]);

  const addEducation = (schoolName, degree, gradYear) => {
    if (schoolName && degree && gradYear) {
      setEducationData(prevData => [
        ...prevData,
        {
          schoolName,
          degree,
          gradYear,
        },
      ]);
    }
  };
  const goprevious = () => {
    
    prevStep(); 
  };
  const addInfo = () => {
    
    nextStep(); 
  };


  return (
    <div>
      <h2>Education Details</h2>
      <form onSubmit={e => e.preventDefault()}>
        <label>School Name:</label>
        <input
          type="text"
          id="schoolName"
          placeholder="Enter school name"
        />

        <label>Degree:</label>
        <input
          type="text"
          id="degree"
          placeholder="Enter degree"
        />

        <label>Graduation Year:</label>
        <input
          type="text"
          id="gradYear"
          placeholder="Enter graduation year"
        />

        <button
          type="button"
          onClick={() => {
            const schoolNameInput = document.getElementById('schoolName');
            const degreeInput = document.getElementById('degree');
            const gradYearInput = document.getElementById('gradYear');

            addEducation(
              schoolNameInput.value,
              degreeInput.value,
              gradYearInput.value
            );

            schoolNameInput.value = '';
            degreeInput.value = '';
            gradYearInput.value = '';
            addInfo();
          }}
        >
          Add Education
        </button>
        <button type="button" onClick={goprevious}>
          prevoius
        </button>
      </form>

     
    </div>
  );
}

export default EducationComponent;
