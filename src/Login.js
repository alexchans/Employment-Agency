import React from 'react';
import logo from './img/logo.png';
import Styles from './Login.module.css';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    state = {
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            [`${name}Error`]: '',
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        let hasError = false;
        if (!username) {
            this.setState({ usernameError: 'Username cannot be empty.' });
            hasError = true;
        } else if (!/^[A-Za-z][A-Za-z0-9]{7,}$/.test(username)) {
            this.setState({ usernameError: 'Username must be at least 8 characters long and start with a letter.' });
            hasError = true;
        }
        if (!password) {
            this.setState({ passwordError: 'Password cannot be empty.' });
            hasError = true;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            this.setState({ passwordError: 'Password must be at least 8 characters long and include at least one letter, one number, and one special character.' });
            hasError = true;
        }
        if (hasError) return;
        const response = await axios.post(`http://172.24.240.1:8080/api/login/verify`, {
            username,
            password
        });
        if (!response.data) {
            this.setState({ passwordError: 'Username or Password Wrong' });
            return;
        }
        const isStaff = await axios.get(`http://172.24.240.1:8080/api/staff/exists/${username}`);
        const isEmployer = await axios.get(`http://172.24.240.1:8080/api/employer/exists/${username}`);
        const isProfessional = await axios.get(`http://172.24.240.1:8080/api/professionals/exists/${username}`);
        if (isStaff.data) console.log('/StaffUpdateInfo');
        if (isEmployer.data) console.log('/EmployerProfile');
        if (isProfessional.data) console.log('/ProfessionalInfo');
    };
    render() {
        const { navigation } = this.props;
        const { usernameError, passwordError } = this.state;
        return (
            <div>
                <img src={logo} alt="Logo" className="logo" />
                <h1 className='center'>Employment Agency</h1>
                <h2 className='center'>A recruiting hub that brings talent together!</h2>
                <h3 className='center'>Connect with job seekers and employees</h3>
                <h1 className='center'>Log In</h1>
                <form onSubmit={this.handleSubmit} className={Styles.container}>
                    <label className="label" htmlFor="username">Username:</label>
                    <div>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <p style={{ color: "red" }}>{usernameError}</p>
                    <label className="label" htmlFor="password">Password:</label>
                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <p style={{ color: "red" }}>{passwordError}</p>
                    <div className={Styles.button}>
                        <Button type="submit" variant="contained" size='large'>Log In</Button>
                    </div>
                </form>
                <hr style={{ width: '40%' }} />
                <h4 className='center'>Don't have an account yet?</h4>
                <div className='center'>
                    <Link to="/ProfessionalSignIn">Professional Sign Up</Link>
                    <span> | </span>
                    <Link to="/EmployerSignIn">Employer Sign Up</Link>
                </div>
            </div>
        );
    }
}

export default Login;
