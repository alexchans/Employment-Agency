import React from 'react';
import StaffPageTemp from './components/StaffPageTemp'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class StaffUpdateInfo extends React.Component {
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
        const { phonenumber, email } = this.state;
        if (!email) {
            this.setState({ emailError: 'Invalid email format.' });
        }
        if (!phonenumber) {
            this.setState({ phonenumberError: 'Invalid phonenumber format.' });
        }
        if (email && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setState({ emailError: 'Invalid email format.' });
        }
        if (phonenumber && !/^(\+\d{1,2}\s?)?1?\-?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phonenumber)) {
            this.setState({ phonenumberError: 'Invalid phone number format.' });
        }
        return;
    };
    render() {
        const { phonenumberError, emailError } = this.state;
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
                    <form onSubmit={this.handleSubmit} style={{ paddingRight: '70vw' }}>
                        <h2>Update Info</h2>
                        <label className="label" htmlFor="phonenumber">Phone Number:</label>
                        <div>
                            <input type="text" id="phonenumber" name="phonenumber" value={this.state.phonenumber}
                                onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{phonenumberError}</p>
                        <label className="label" htmlFor="email">Email:</label>
                        <div>
                            <input type="text" id="email" name="email" value={this.state.email}
                                onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{emailError}</p>
                        <div style={{ paddingTop: '3vh' }}>
                            <Button type="submit" variant="contained" size='medium'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default StaffUpdateInfo;
