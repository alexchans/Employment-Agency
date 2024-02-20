import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ESignIn from './ESignIn';
import PSignIn from './PSignIn';
import Login from './Login'
import StaffUpdateInfo from './StaffUpdateInfo'
import StaffAddStaff from './StaffAddStaff';
import StaffRER from './StaffRER';
import StaffRPR from './StaffRPR';
import StaffDelete from './StaffDelete';
import StaffViewE from './StaffViewE';
import StaffViewP from './StaffViewP';
import StaffMatching from './StaffMatching'
import PRemove from './PRemove'
import PPayment from './PPayment'
import PInitiate from './PInitiate'
import PBrowse from './PBrowse'
import PInfo from './PInfo'
import PUpdate from './PUpdate'
import EProfile from './EProfile'
import ECreateJob from './ECreateJob'
import EUpdateJob from './EUpdateJob'
import EDeleteAcc from './EDeleteAcc'
import EPay from './EPay'
import EJobList from './EJobList'
import EChangePass from "./EChangePass";
import PPassword from "./PPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/EmployerSignIn" element={<ESignIn />} />
        <Route path="/ProfessionalSignIn" element={<PSignIn />} />
        <Route path="/StaffUpdateInfo" element={<StaffUpdateInfo />} />
        <Route path="/StaffReviewERequests" element={<StaffRER />} />
        <Route path="/StaffReviewPRequests" element={<StaffRPR />} />
        <Route path="/StaffDeleteAccounts" element={<StaffDelete />} />
        <Route path="/StaffViewEAccounts" element={<StaffViewE />} />
        <Route path="/StaffViewPAccounts" element={<StaffViewP />} />
        <Route path="/StaffMatching" element={<StaffMatching />} />
        <Route path="/StaffAddStaff" element={<StaffAddStaff />} />
        <Route path="/ProfessionalRemove" element={<PRemove />} />
        <Route path="/ProfessionalPayment" element={<PPayment />} />
        <Route path="ProfessionalInitiate" element={<PInitiate />} />
        <Route path="ProfessionalBrowse" element={<PBrowse />} />
        <Route path="ProfessionalInfo" element={<PInfo />} />
        <Route path="ProfessionalUpdate" element={<PUpdate />} />
        <Route path="/ProfessionalPassword" element={<PPassword />} />
        <Route path="/EmployerProfile" element={<EProfile />} />
        <Route path="/EmployerDelete" element={<EDeleteAcc />} />
        <Route path="/EmployerCreateJob" element={<ECreateJob />} />
        <Route path="/EmployerUpdateJob" element={<EUpdateJob />} />
        <Route path="/EmployerChangePass" element={<EChangePass />} />
        <Route path="/EmployerPayment" element={<EPay />} />
        <Route path="/EmployerJobList" element={<EJobList />} />
      </Routes>
    </Router>
  );
}

export default App;
