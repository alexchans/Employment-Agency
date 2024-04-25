import React, { useState, useEffect } from 'react';
import StaffPageTemp from './components/StaffPageTemp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StaffViewE() {
    const [openDialog, setOpenDialog] = useState(false);
    const [usernames, setUsernames] = useState([]);
    const [userDetails, setUserDetail] = useState({});
    const [EDetail, setEDetail] = useState({});

    useEffect(() => {
        const fetchUsernames = async () => {
            const response = await axios.get(`http://localhost:8080/api/employer/all`);
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
        setEDetail(userDetails[user]);
        console.log(EDetail);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEDetail({});
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
                    <h2>View Employer Accounts</h2>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        {usernames.map(user => (
                            <div key={user} className='flex' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px' }}>
                                <li style={{ flex: 1, cursor: 'pointer', marginRight: '10px' }} onClick={() => handleOpenDialog(user)}>{user}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Employer Details</DialogTitle>
                <DialogContent>
                    <p>Username: {EDetail.username}</p>
                    <p>First Name: {EDetail.firstName}</p>
                    <p>Last Name: {EDetail.lastName}</p>
                    <p>Company: {EDetail.companyName}</p>
                    <p>Email: {EDetail.email}</p>
                    <p>Phone Number: {EDetail.phoneNumber}</p>
                    <p>Street Address: {EDetail.streetAddress}</p>
                    <p>City: {EDetail.city}</p>
                    <p>State: {EDetail.state}</p>
                    <p>ZipCode: {EDetail.zipcode}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default StaffViewE;
