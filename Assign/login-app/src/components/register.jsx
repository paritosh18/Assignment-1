import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../css/register.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'user',
        adminSecretKey: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://system-1wf6.onrender.com/api/register', formData);
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <form onSubmit={handleSubmit}>
                    <ToastContainer />
                    <h3>Registration Form</h3>


                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="email"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label>
                            Email
                        </label>
                        <input type="Email-address" name="email" placeholder='Email' required />
                    </div>

                    
                    <div className='form-group'>
                        <label>
                            Date of Birth
                        </label>
                        <input type="date" name="dob" placeholder='please enter your date of birth' required
                            onChange={(e) => {
                                const date = new Date(e.target.value);
                                const today = new Date();
                                const age = today.getFullYear() - date.getFullYear();
                                const errorMessage = '(Age should be greater than 18)';
                                const errorSpan = e.target.parentElement.querySelector('span');
                                
                                if (age < 18) {
                                    e.target.value = '';
                                    if (!errorSpan) {
                                        e.target.parentElement.insertAdjacentHTML('beforeend', `<span style="color: red">${errorMessage}</span>`);
                                    }
                                } else if (errorSpan) {
                                    errorSpan.remove();
                                }
                            }} />
                    </div>
                    <div className='form-group'>
                        <label>
                           location
                        </label>
                        <input type="location" name="location" placeholder='location' required />

                    </div>

                


                    <button type="submit">Register</button>
                </form>

                <span>Already Have Account? <Link to='/'>Login</Link></span>
            </div>
        </div>
    );
}

export default Register;