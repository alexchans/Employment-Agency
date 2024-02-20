import React from 'react';
import StaffPageTemp from './components/StaffPageTemp'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class StaffAddStaff extends React.Component {
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
        const { username, firstname, lastname, email, phonenumber } = this.state;
        const fields = { firstname, lastname, email, phonenumber, username };
        Object.keys(fields).forEach(field => {
            if (!fields[field]) {
                this.setState({ [`${field}Error`]: `${field.charAt(0).toUpperCase() + field.slice(1)} cannot be empty.` });
            }
        });
        if (username && !/^[A-Za-z][A-Za-z0-9]{7,}$/.test(username)) {
            this.setState({ usernameError: 'Username must be at least 8 characters long and start with a letter.' });
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
        const { usernameError, emailError, phonenumberError, firstnameError, lastnameError } = this.state;
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
                    </ul>
                    <form onSubmit={this.handleSubmit} style={{ paddingRight: '70vw' }}>
                        <h2>Add New Staff</h2>
                        <label className="label" htmlFor="firstname">First Name:</label>
                        <div>
                            <input type="text" id="firstname" name="firstname" value={this.state.firstname}
                                onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{firstnameError}</p>
                        <label className="label" htmlFor="lastname">Last Name:</label>
                        <div>
                            <input type="text" id="lastname" name="lastname" value={this.state.lastname}
                                onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{lastnameError}</p>
                        <label className="label" htmlFor="username">Preferred Username:</label>
                        <div>
                            <input type="text" id="username" name="username" value={this.state.username}
                                onChange={this.handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{usernameError}</p>
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

export default StaffAddStaff;
