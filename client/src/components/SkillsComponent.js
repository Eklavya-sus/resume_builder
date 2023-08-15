// components/SkillsComponent.js
import React, { useState } from 'react';

function SkillsComponent({ prevStep}) {
  const [skills, setSkills] = useState(['', '', '', '', '', '']);

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };
  const goprevious = () => {
    
    prevStep(); 
  };

  return (
    <div>
      <h2>Skills</h2>
      <form>
        {skills.map((skill, index) => (
          <div key={index}>
            <label>Skill {index + 1}:</label>
            <input
              type="text"
              value={skill}
              onChange={e => handleSkillChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={goprevious}>
          prevoius
        </button>
      </form>



    </div>
  );
}

export default SkillsComponent;
