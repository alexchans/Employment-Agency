import React, { useState, useEffect } from 'react';
import StaffPageTemp from './components/StaffPageTemp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StaffDelete() {
    const [openDialog, setOpenDialog] = useState(false);
    const [usernames, setUsernames] = useState([]);
    const [balance, setbalance] = useState(null);

    useEffect(() => {
        const fetchUsernames = async () => {
            const response = await axios.get(`http://172.24.240.1:8080/api/employer-deletion-requests/all`);
            const employerUsernames = response.data.map(request => request.username);
            const response2 = await axios.get(`http://172.24.240.1:8080/api/professionals/deletion-requests/all`);
            const professionalUsernames = response2.data.map(request => request.username);
            const usernames = [...employerUsernames, ...professionalUsernames];
            setUsernames(usernames);
        };

        fetchUsernames();
    }, []);

    const handleApprove = async (username) => {
        await axios.put(`http://172.24.240.1:8080/api/professionals/deletion/approve/${username}`);
        await axios.put(`http://172.24.240.1:8080/api/employer-deletion-requests/approve/${username}`);
        window.location.reload();
    };

    const handleDeny = async (username) => {
        await axios.put(`http://172.24.240.1:8080/api/employer-deletion-requests/deleteDeletionRequest/${username}`);
        await axios.put(`http://172.24.240.1:8080/api/professionals/deleteDeletionRequest/${username}`);
        window.location.reload();
    };

    const handleOpenDialog = async (user) => {
        setOpenDialog(true);
        const response = await axios.get(`http://172.24.240.1:8080/api/payments/${user}/balance`);
        setbalance(response.data);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setbalance(null);
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
                <div style={{ paddingRight: '55vw' }}>
                    <h2>Review Delete Account Requests</h2>
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
                <DialogTitle>User Details</DialogTitle>
                <DialogContent>
                    <p>Account Balance: {balance}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default StaffDelete;
