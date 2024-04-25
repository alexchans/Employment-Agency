import React, { useState } from 'react';
import Button from '@mui/material/Button';
import StaffPageTemp from './components/StaffPageTemp';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function StaffChangePassword() {
    const username = Cookies.get('username');
    const userType = "Staff";

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPasswordError, setCurrentPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'currentpassword':
                setCurrentPassword(value);
                setCurrentPasswordError('');
                break;
            case 'newpassword':
                setNewPassword(value);
                setNewPasswordError('');
                break;
            case 'confirmpassword':
                setConfirmPassword(value);
                setConfirmPasswordError('');
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let isValid = true;

        if (!currentPassword) {
            setCurrentPasswordError('Current Password cannot be empty.');
            isValid = false;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(currentPassword)) {
            setCurrentPasswordError('Password must be at least 8 characters long and include at least one letter and one number.');
            isValid = false;
        }

        if (!newPassword) {
            setNewPasswordError('New Password cannot be empty.');
            isValid = false;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(newPassword)) {
            setNewPasswordError('Password must be at least 8 characters long and include at least one letter and one number.');
            isValid = false;
        } else if (newPassword === currentPassword) {
            setNewPasswordError('New Password must be different from Current Password.');
            isValid = false;
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Confirm Password cannot be empty.');
            isValid = false;
        } else if (confirmPassword !== newPassword) {
            setConfirmPasswordError('Passwords do not match.');
            isValid = false;
        }

        if (!isValid) return;

        const response = await axios.put(`http://localhost:8080/api/login/update-password/${newPassword}`, {
            username,
            password: currentPassword,
            userType
        });
        if (response.data) {
            setConfirmPasswordError('Password changed successfully');
        } else {
            setConfirmPasswordError('Current password is not correct');
        }
        return;
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
                <form onSubmit={handleSubmit} style={{ paddingRight: '68vw' }}>
                    <h2>Change Password</h2>
                    <label className="label" htmlFor="currentpassword">Current Password:</label>
                    <input type="password" id="currentpassword" name="currentpassword" value={currentPassword} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{currentPasswordError}</p>
                    <label className="label" htmlFor="newpassword">New Password:</label>
                    <input type="password" id="newpassword" name="newpassword" value={newPassword} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{newPasswordError}</p>
                    <label className="label" htmlFor="confirmpassword">Confirm Password:</label>
                    <input type="password" id="confirmpassword" name="confirmpassword" value={confirmPassword} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{confirmPasswordError}</p>
                    <Button type="submit" variant="contained" size='medium' color='success'>Change Password</Button>
                </form>
            </div>
        </div>
    );
}

export default StaffChangePassword;
