import React from 'react';
import logo from './img/logo.png';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';


class PRemove extends React.Component {
    state = {
        username: '',
        password: '',
        usernameError: '',
        passwordError: ''

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
        const { username, password } = this.state;
        this.setState({ usernameError: '', passwordError: '' });
        if (!username) {
            this.setState({ usernameError: 'Username cannot be empty.' });
        } else if (!/^[A-Za-z][A-Za-z0-9]{7,}$/.test(username)) {
            this.setState({ usernameError: 'Username must be at least 8 characters long and start with a letter.' });
        }
        if (!password) {
            this.setState({ passwordError: 'Password cannot be empty.' });
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            this.setState({ passwordError: 'Password must be at least 8 characters long and include at least one letter, one number, and one special character.' });
        }
        return;
    }

    render() {
        const { username, password, usernameError, passwordError } = this.state;
        return(
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
                            <input type="text" id="username" name="username" value={username} onChange={this.handleInputChange}/>
                        </div>
                        {usernameError && <p style={{color: 'red'}}>{usernameError}</p>}
                        <label className="label" htmlFor="password">Password:</label>
                        <div>
                            <input type="password" id="password" name="password" value={password} onChange={this.handleInputChange}/>
                        </div>
                        {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
                        <div style={{ paddingTop: '3vh' }}>
                            <Button variant="contained" size='medium' color='warning' onClick={this.handleSubmit}>remove</Button>
                        </div>
                    </div>
                </div>

            </div>










        );




    }

}
export default PRemove;