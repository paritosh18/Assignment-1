import React, { useState } from 'react';
import '../css/ProfileDetails.css';

const Dashboard = () => {
    const [fullName, setFullName] = useState('satyam');
    const [email, setEmail] = useState('satyambharti@gmail.com');
    const [dob, setDob] = useState('2003-03-01');
    const [location, setLocation] = useState('mumbai');

    const handleUpdate = (e) => {
        e.preventDefault();
        // Update form logic here
        console.log({ fullName, email, dob, location });
    };

    return (
        <div className="profile-details-container">
            <h1>Welcome Swapnil Bendal</h1>
            <div className="menu">
                <button className="menu-btn active">Profile Details</button>
                <button className="menu-btn">Change Password</button>
                <button className="menu-btn">Delete Account</button>
                <button className="menu-btn">Make Payment</button>
            </div>

            <div className="form-section">
                <h3>Personal Details</h3>
                <form onSubmit={handleUpdate}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Mail Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="update-btn">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
