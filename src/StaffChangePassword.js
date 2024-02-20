import React from 'react';
import Button from '@mui/material/Button';
import StaffPageTemp from './components/StaffPageTemp'
import { Link } from 'react-router-dom';

class StaffChangePassword extends React.Component {
    state = {
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            [`${name}Error`]: '',
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { currentpassword, newpassword, confirmpassword } = this.state;
        if (!currentpassword) {
            this.setState({ currentpasswordError: 'Current Password cannot be empty.' });
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(currentpassword)) {
            this.setState({ currentpasswordError: 'Password must be at least 8 characters long and include at least one letter and one number.' });
        }
        if (!newpassword) {
            this.setState({ newpasswordError: 'New Password cannot be empty.' });
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(newpassword)) {
            this.setState({ newpasswordError: 'Password must be at least 8 characters long and include at least one letter and one number.' });
        } else if (newpassword === currentpassword) {
            this.setState({ newpasswordError: 'New Password must be different from Current Password.' });
        }
        if (!confirmpassword) {
            this.setState({ confirmpasswordError: 'Confirm Password cannot be empty.' });
        } else if (confirmpassword !== newpassword) {
            this.setState({ confirmpasswordError: 'Passwords do not match.' });
        }
        return;
    };
    render() {
        const { currentpasswordError, newpasswordError, confirmpasswordError } = this.state;
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
                    <form onSubmit={this.handleSubmit} style={{ paddingRight: '68vw' }}>
                        <h2>Change Password</h2>
                        <div>
                            <label className="label" htmlFor="currentpassword">Current Password:</label>
                        </div>
                        <div>
                            <input type="password" id="currentpassword" name="currentpassword" value={this.state.currentpassword} onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{currentpasswordError}</p>
                        <div>
                            <label className="label" htmlFor="newpassword">New Password:</label>
                        </div>
                        <div>
                            <input type="password" id="newpassword" name="newpassword" value={this.state.newpassword} onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{newpasswordError}</p>
                        <div>
                            <label className="label" htmlFor="confirmpassword">Confirm Password:</label>
                        </div>
                        <div>
                            <input type="password" id="confirmpassword" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{confirmpasswordError}</p>
                        <div className='center'>
                            <Button type="submit" variant="contained" size='medium' color='success'>Change Password</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default StaffChangePassword;


