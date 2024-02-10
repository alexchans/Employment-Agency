import React from 'react';
import StaffPageTemp from './components/StaffPageTemp'
import Button from '@mui/material/Button';

class StaffUpdateInfo extends React.Component {
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
                        <h2>Update Info</h2>
                        <label className="label" htmlFor="phonenumber">Phone Number:</label>
                        <div>
                            <input type="text" id="phonenumber" name="phonenumber" />
                        </div>
                        <label className="label" htmlFor="email">Email:</label>
                        <div>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div style={{ paddingTop: '3vh' }}>
                            <Button variant="contained" size='medium'>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffUpdateInfo;