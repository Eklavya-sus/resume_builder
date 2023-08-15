// components/ProjectsComponent.js
import React, { useState } from 'react';

function ProjectsComponent({prevStep,nextStep}) {
  const [projectsData, setProjectsData] = useState([]);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const addProject = () => {
    if (title && link && description) {
      setProjectsData(prevData => [
        ...prevData,
        {
          title,
          link,
          description,
        },
      ]);
      setTitle('');
      setLink('');
      setDescription('');
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
      <h2>Projects</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label>Link:</label>
        <input
          type="text"
          value={link}
          onChange={e => setLink(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button type="button"  onClick={() => {
           addInfo(); 
          addProject();
           }}
           >
          Add Project
        </button>
        <button type="button" onClick={goprevious}>
          prevoius
        </button>
      </form>

    
    </div>
  );
}

export default ProjectsComponent;
