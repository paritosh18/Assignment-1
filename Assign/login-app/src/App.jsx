import React from 'react';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard'
import Otp from './components/otp'
import ProfileStep1 from './components/Profilestep1'
import ProfileStep2 from './components/Profilestep2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/Profilestep1" element={< ProfileStep1 />} />
          <Route path="/Profilestep2" element={< ProfileStep2/>} />
          
      
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;



