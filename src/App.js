import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './img/logo.png';
import './App.css';
import Button from '@mui/material/Button';
import ESignIn from './ESignIn';
import PSignIn from './PSignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/EmployerSignIn" element={<ESignIn />} />
          <Route path="/ProfessionalSignIn" element={<PSignIn />} />
        </Routes>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Employment Agency</h1>
        <h2>A recruiting hub that brings talent together!</h2>
        <h3>Connect with job seekers and employees</h3>
        <h1>Log In</h1>
        <div className="input-container">
          <label className="label" htmlFor="username">Username:</label>
          <div>
            <input type="text" id="username" name="username" />
          </div>
          <label className="label" htmlFor="password">Password:</label>
          <div>
            <input type="text" id="password" name="password" />
          </div>
        </div>
        <div className='button'>
          <Button variant="contained">Log In</Button>
        </div>
        <hr style={{ width: '40%' }} />
        <h4>Don't have an account yet?</h4>
        <div className='sign-up'>
          <Link to="/ProfessionalSignIn">Professional Sign Up</Link>
          <span style={{ padding: 5 }}>|</span>
          <Link to="/EmployerSignIn">Employer Sign Up</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
