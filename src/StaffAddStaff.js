import React, { useState } from 'react';
import Button from '@mui/material/Button';
import StaffPageTemp from './components/StaffPageTemp';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StaffAddStaff() {
    const [fields, setFields] = useState({
        first_name: '',
        last_name: '',
        username: '',
        phone_number: '',
        email: '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFields(prev => ({ ...prev, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {};
        let isValid = true;

        // Validate each field and set errors
        if (!fields.first_name) {
            newErrors.first_name = 'First name cannot be empty.';
            isValid = false;
        }
        if (!fields.last_name) {
            newErrors.last_name = 'Last name cannot be empty.';
            isValid = false;
        }
        if (!fields.username) {
            newErrors.username = 'Username cannot be empty.';
            isValid = false;
        } else if (!/^[A-Za-z][A-Za-z0-9]{7,}$/.test(fields.username)) {
            newErrors.username = 'Username must be at least 8 characters long and start with a letter.';
            isValid = false;
        }
        if (!fields.phone_number) {
            newErrors.phone_number = 'Phone number cannot be empty.';
            isValid = false;
        } else if (!/^(\+\d{1,2}\s?)?1?\-?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(fields.phone_number)) {
            newErrors.phone_number = 'Invalid phone number format.';
            isValid = false;
        }
        if (!fields.email) {
            newErrors.email = 'Email cannot be empty.';
            isValid = false;
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fields.email)) {
            newErrors.email = 'Invalid email format.';
            isValid = false;
        }

        if (!isValid) {
            setErrors(newErrors);
            return;
        }

        const response = await axios.post(`http://172.24.240.1:8080/api/staff/create`, { username: fields.username, email: fields.email, firstName: fields.first_name, lastName: fields.last_name, phoneNumber: fields.phone_number });
        newErrors.email = "new staff " + fields.username + " created";
        setErrors(newErrors);
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
                    <h2>Add New Staff</h2>
                    <label className="label" htmlFor="first_name">First Name:</label>
                    <input type="text" id="first_name" name="first_name" value={fields.first_name} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{errors.first_name}</p>
                    <label className="label" htmlFor="last_name">Last Name:</label>
                    <input type="text" id="last_name" name="last_name" value={fields.last_name} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{errors.last_name}</p>
                    <label className="label" htmlFor="username">Preferred Username:</label>
                    <input type="text" id="username" name="username" value={fields.username} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{errors.username}</p>
                    <label className="label" htmlFor="phone_number">Phone Number:</label>
                    <input type="text" id="phone_number" name="phone_number" value={fields.phone_number} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{errors.phone_number}</p>
                    <label className="label" htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={fields.email} onChange={handleInputChange} />
                    <p style={{ color: "red" }}>{errors.email}</p>
                    <Button type="submit" variant="contained" size='medium'>Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default StaffAddStaff;
