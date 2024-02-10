import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ESignIn from './ESignIn';
import PSignIn from './PSignIn';
import Login from './Login'
import PRemove from './PRemove'
import StaffUpdateInfo from './StaffUpdateInfo'
import StaffAddStaff from './StaffAddStaff';
import PPayment from './PPayment'
import PInitiate from './PInitiate'
import PBrowse from './PBrowse'
import PInfo from './PInfo'
import PUpdate from './PUpdate'


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
        <Route path="/ProfessionalPayment" element={<PPayment />} />
        <Route path="ProfessionalInitiate" element={<PInitiate />} />
        <Route path="ProfessionalBrowse" element = {<PBrowse />} />
        <Route path="ProfessionalInfo" element = {<PInfo />} />
        <Route path="ProfessionalUpdate" element = {<PUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
