import React, { useState } from 'react';
import '../css/ProfileStep2.css';

const ProfileStep2 = () => {
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('www.linkedin.com/');
  const [facebook, setFacebook] = useState('www.facebook.com/');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log({ bio, linkedin, facebook });
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>Complete profile step-2</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              className="text-area"
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write a short bio..."
            />
          </div>
          <div className="form-group">
            <label>LinkedIn url</label>
            <input
              type="text"
              className="text-input"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Facebook url</label>
            <input
              type="text"
              className="text-input"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileStep2;
