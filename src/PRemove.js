import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function PRemove() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
        setUsernameError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username) {
            setUsernameError('Username cannot be empty.');
            return;
        } else if (!/^[A-Za-z][A-Za-z0-9]{7,}$/.test(username)) {
            setUsernameError('Username must be at least 8 characters long and start with a letter.');
            return;
        }

        try {
            // Note the use of backticks for string interpolation
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
                    <label className="label" htmlFor="username">Username:</label>
                    <div>
                        <input type="text" id="username" name="username" value={username} onChange={handleInputChange} />
                        {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
                    </div>
                    <div style={{ paddingTop: '3vh' }}>
                        <Button variant="contained" size='medium' color='warning' onClick={handleSubmit}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PRemove;
