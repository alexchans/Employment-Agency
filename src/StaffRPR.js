import React from 'react';
import StaffPageTemp from './components/StaffPageTemp'
import Button from '@mui/material/Button';

class StaffRPR extends React.Component {
    render() {
        return (
            <div>
                <StaffPageTemp />
                <div className='flex'>
                    <ul>
                        <li>Update Info</li>
                        <li>Review E Requests</li>
                        <li>Review P Requests</li>
                        <li>Delete Accounts</li>
                        <li>View E Accounts</li>
                        <li>View P Accounts</li>
                        <li>Initiate Matching</li>
                        <li>Add Staff</li>
                    </ul>
                    <div style={{ paddingRight: '70vw' }}>
                        <h2>Review Professional Account Requests</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffRPR;
