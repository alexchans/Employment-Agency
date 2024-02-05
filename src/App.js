import logo from './img/logo.png';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Employment Agency</h1>
      <h2>A recruiting hub that bring talent together!</h2>
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
        <a href='www.google.com'>Professional Sign Up</a>
        <span style={{ padding: 5 }}>|</span>
        <a href='www.google.com'>Employer Sign Up</a>
      </div>
    </div >
  );
}

export default App;
