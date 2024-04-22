import React, { useState } from 'react';
import StaffPageTemp from './components/StaffPageTemp';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function StaffUpdateInfo() {
    const username = Cookies.get('username');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'phonenumber':
                setPhoneNumber(value);
                setPhoneNumberError('');
                break;
            case 'email':
                setEmail(value);
                setEmailError('');
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let isValid = true;

        if (!email || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError('Invalid email format.');
            isValid = false;
        }

        if (!phonenumber || !/^(\+\d{1,2}\s?)?1?\-?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phonenumber)) {
            setPhoneNumberError('Invalid phone number format.');
            isValid = false;
        }

        if (!isValid) {
            return;
        }
        const response = await axios.put(`http://172.24.240.1:8080/api/staff/update/${username}/${phonenumber}/${email}`);
        setEmailError('Password and Email Updated Successfully');
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
                <form onSubmit={handleSubmit} style={{ paddingRight: '70vw' }}>
                    <h2>Update Info</h2>
                    <label className="label" htmlFor="phonenumber">Phone Number:</label>
                    <div>
                        <input
                            type="text"
                            id="phonenumber"
                            name="phonenumber"
                            value={phonenumber}
                            onChange={handleInputChange}
                        />
                        <p style={{ color: "red" }}>{phonenumberError}</p>
                    </div>
                    <label className="label" htmlFor="email">Email:</label>
                    <div>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <p style={{ color: "red" }}>{emailError}</p>
                    </div>
                    <div style={{ paddingTop: '3vh' }}>
                        <Button type="submit" variant="contained" size='medium'>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StaffUpdateInfo;
