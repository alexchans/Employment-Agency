import React from 'react';
import StaffPageTemp from './components/StaffPageTemp'
import Button from '@mui/material/Button';

class StaffViewE extends React.Component {
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
                        <h2>View Employer Accounts</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffViewE;
