import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ESignIn from './ESignIn';
import PSignIn from './PSignIn';
import Login from './Login'
import PRemove from './PRemove'
import StaffUpdateInfo from './StaffUpdateInfo'
import StaffAddStaff from './StaffAddStaff';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/EmployerSignIn" element={<ESignIn />} />
        <Route path="/ProfessionalSignIn" element={<PSignIn />} />
        <Route path="/ProfessionalRemove" element={<PRemove />} />
        <Route path="/StaffUpdateInfo" element={<StaffUpdateInfo />} />
        <Route path="/StaffAddStaff" element={<StaffAddStaff />} />
      </Routes>
    </Router>
  );
}

export default App;
