import React from 'react';
import StaffPageTemp from './components/StaffPageTemp'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class StaffMatching extends React.Component {
    render() {
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
                    <div style={{ paddingRight: '71.5vw' }}>
                        <h2>Initiate Matching</h2>
                        <ul>
                            <div className='flex' >
                                <li>Alex Chen</li>
                                <Button variant="contained" size='small'>Match</Button>
                            </div>
                            <hr />
                            <div className='flex'>
                                <li>Logan Lu</li>
                                <Button variant="contained" size='small'>Match</Button>
                            </div>
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffMatching;
