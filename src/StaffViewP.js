import React, { useState, useEffect } from 'react';
import StaffPageTemp from './components/StaffPageTemp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StaffViewP() {
    const [openDialog, setOpenDialog] = useState(false);
    const [usernames, setUsernames] = useState([]);
    const [userDetails, setUserDetail] = useState({});
    const [PDetail, setPDetail] = useState({});

    useEffect(() => {
        const fetchUsernames = async () => {
            const response = await axios.get(`http://localhost:8080/api/professionals`);
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
                    <h2>View Professional Accounts</h2>
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

export default StaffViewP;
