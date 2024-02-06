import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
