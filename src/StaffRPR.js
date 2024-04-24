import React, { useState, useEffect } from 'react';
import StaffPageTemp from './components/StaffPageTemp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StaffRER() {
    const [openDialog, setOpenDialog] = useState(false);
    const [usernames, setUsernames] = useState([]);
    const [userDetails, setUserDetail] = useState({});
    const [PDetail, setPDetail] = useState({});

    useEffect(() => {
        const fetchUsernames = async () => {
            const response = await axios.get(`http://172.24.240.1:8080/api/professionalRequests/all`);
            const userDetailsMap = {};
            const usernamesList = response.data.map(user => {
                userDetailsMap[user.username] = user;
                return user.username;
            });
            setUsernames(usernamesList);
            setUserDetail(userDetailsMap);
        };

        fetchUsernames();
    }, []);


    const handleOpenDialog = async (user) => {
        setOpenDialog(true);
        setPDetail(userDetails[user]);
        console.log(PDetail);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setPDetail({});
    };

    const handleApprove = async (username) => {
        await axios.post(`http://172.24.240.1:8080/api/professionals/create/${username}`);
        window.location.reload();
    };

    const handleDeny = async (username) => {
        await axios.put(`http://172.24.240.1:8080/api/professionalRequests/delete/${username}`);
        window.location.reload();
    };

    return (
        <div>
            <StaffPageTemp />
            <div className='flex'>
                <ul>
                    <li><Link to="/StaffUpdateInfo">Update Info</Link></li>
                    <li><Link to="/StaffReviewERequests">Review E Requests</Link></li>
                    <li><Link to="/StaffReviewPRequests">Review P Requests</Link></li>
                    <li><Link to="/StaffDeleteAccounts">Delete Accounts</Link></li>
                    <li><Link to="/StaffViewEAccounts">View E Accounts</Link></li>
                    <li><Link to="/StaffViewPAccounts">View P Accounts</Link></li>
                    <li><Link to="/StaffMatching">Initiate Matching</Link></li>
                    <li><Link to="/StaffAddStaff">Add Staff</Link></li>
                    <li><Link to="/StaffChangePassword">Change Password</Link></li>
                </ul>
                <div style={{ paddingRight: '63vw' }}>
                    <h2>Review Professional Account Requests</h2>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        {usernames.map(user => (
                            <div key={user} className='flex' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px' }}>
                                <li style={{ flex: 1, cursor: 'pointer', marginRight: '10px' }} onClick={() => handleOpenDialog(user)}>{user}</li>
                                <div>
                                    <Button onClick={() => handleApprove(user)} variant="contained" size='small'>Approve</Button>
                                    <Button onClick={() => handleDeny(user)} variant="contained" size='small' style={{ backgroundColor: 'red', marginLeft: '5px' }}>Deny</Button>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Employer Details</DialogTitle>
                <DialogContent>
                    <p>Username: {PDetail.username}</p>
                    <p>First Name: {PDetail.firstName}</p>
                    <p>Last Name: {PDetail.lastName}</p>
                    <p>Institution: {PDetail.institution}</p>
                    <p>Gradudation Date: {PDetail.graduationDate}</p>
                    <p>Email: {PDetail.email}</p>
                    <p>Phone Number: {PDetail.phoneNumber}</p>
                    <p>Street Address: {PDetail.streetAddress}</p>
                    <p>City: {PDetail.city}</p>
                    <p>State: {PDetail.state}</p>
                    <p>ZipCode: {PDetail.zipcode}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default StaffRER;
