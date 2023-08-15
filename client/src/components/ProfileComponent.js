// components/ProfileComponent.js
import React, { useState } from 'react';

function ProfileComponent({ nextStep }) {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    facebook: '',
    linkedin: '',
    twitter: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProfileData(prevProfileData => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  const addInfo = () => {
    
    nextStep(); 
  };

  return (
    <div>
      <h2>Profile Details</h2>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={profileData.firstName}
          onChange={handleInputChange}
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={profileData.lastName}
          onChange={handleInputChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleInputChange}
        />

        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={profileData.mobile}
          onChange={handleInputChange}
        />

        <label>Facebook:</label>
        <input
          type="text"
          name="facebook"
          value={profileData.facebook}
          onChange={handleInputChange}
        />

        <label>LinkedIn:</label>
        <input
          type="text"
          name="linkedin"
          value={profileData.linkedin}
          onChange={handleInputChange}
        />

        <label>Twitter:</label>
        <input
          type="text"
          name="twitter"
          value={profileData.twitter}
          onChange={handleInputChange}
        />
         <button type="button" onClick={addInfo}>
          Add info
        </button>
      </form>
    </div>
  );
}

export default ProfileComponent;
