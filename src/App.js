import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import './App.css';
import Button from '@mui/material/Button';
import ESignIn from './ESignIn';
import PSignIn from './PSignIn';
import Login from './Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/EmployerSignIn" element={<ESignIn />} />
        <Route path="/ProfessionalSignIn" element={<PSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
