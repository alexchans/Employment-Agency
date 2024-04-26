import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function PRemove() {
    const [usernameError, setUsernameError] = useState('');
    const username = Cookies.get('username'); // Automatically retrieve the username from cookies

    useEffect(() => {
        if (!username) {
            setUsernameError('Username not found in cookies.');
        }
    }, [username]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username) {
            setUsernameError('Username cannot be empty.');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/api/professionals/deletion-requests/${username}`);
            console.log(response.data);
            alert('Deletion request submitted successfully!');
        } catch (error) {
            console.error('Failed to submit deletion request:', error);
            alert('Failed to submit deletion request. Please try again.');
        }
    };

    return (
        <div>
            <ProPageTemp />
            <div className='flex'>
                <ul>
                    <li><Link to="/ProfessionalUpdate">Update Info</Link></li>
                    <li><Link to="/ProfessionalBrowse">Browse Job</Link></li>
                    <li><Link to="/ProfessionalInitiate">Initiate Matching</Link></li>
                    <li><Link to="/ProfessionalRemove">Remove</Link></li>
                    <li><Link to="/ProfessionalPayment">Payment</Link></li>
                    <li><Link to="/ProfessionalPassword">Change Password</Link></li>
                </ul>
                <div style={{ paddingRight: '70vw' }}>
                    <h2>Remove Account</h2>
                    {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
                    <div style={{ paddingTop: '3vh' }}>
                        <Button variant="contained" size='medium' color='warning' onClick={handleSubmit}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PRemove;
