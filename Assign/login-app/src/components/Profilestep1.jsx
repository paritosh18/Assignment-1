import React, { useState } from 'react';
import '../css/ProfileStep1.css';

const ProfileStep1 = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>Complete profile step-1</h2>
        <form>
          <div className="form-group">
            <label>Profile Image</label>
            <input type="file" className="file-input" accept="image/*" />
          </div>
          <div className="form-group">
            <label>Profile Video (30 seconds max.)</label>
            <input
              type="file"
              className="file-input"
              accept="video/*"
              capture="camcorder"
              onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  const video = document.createElement('video');
                  video.preload = 'metadata';
                  video.onloadedmetadata = () => {
                    const duration = video.duration;
                    if (duration > 30) {
                      alert('Video should not exceed 30 seconds');
                      e.target.value = '';
                    }
                  };
                  video.src = url;
                }
              }}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />{' '}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />{' '}
                Female
              </label>
            </div>
          </div>
          <button type="submit" className="proceed-btn">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileStep1;
