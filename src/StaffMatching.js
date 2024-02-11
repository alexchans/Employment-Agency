import React from 'react';
import StaffPageTemp from './components/StaffPageTemp'
import Button from '@mui/material/Button';

class StaffMatching extends React.Component {
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
