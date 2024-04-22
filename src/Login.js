import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import logo from './img/logo.png';
import Styles from './Login.module.css';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';

function Login() {
    const [state, setState] = useState({
        username: '',
        password: '',
        usernameError: '',
        passwordError: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
            [`${name}Error`]: ''  // Reset errors on input change
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let hasError = false;
        const { username, password } = state;

        if (!username) {
            setState(prevState => ({ ...prevState, usernameError: 'Username cannot be empty.' }));
            hasError = true;
        } else if (!/^[A-Za-z][A-Za-z0-9]{7,}$/.test(username)) {
            setState(prevState => ({ ...prevState, usernameError: 'Username must be at least 8 characters long and start with a letter.' }));
            hasError = true;
        }

        if (!password) {
            setState(prevState => ({ ...prevState, passwordError: 'Password cannot be empty.' }));
            hasError = true;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setState(prevState => ({ ...prevState, passwordError: 'Password must be at least 8 characters long and include at least one letter, one number, and one special character.' }));
            hasError = true;
        }

        if (hasError) return;

        try {
            const response = await axios.post(`http://172.24.240.1:8080/api/login/verify`, { username, password });
            if (!response.data) {
                setState(prevState => ({ ...prevState, passwordError: 'Username or Password Wrong' }));
                return;
            }
            Cookies.set('username', username, { expires: 7 });
            const isStaff = await axios.get(`http://172.24.240.1:8080/api/staff/exists/${username}`);
            const isEmployer = await axios.get(`http://172.24.240.1:8080/api/employer/exists/${username}`);
            const isProfessional = await axios.get(`http://172.24.240.1:8080/api/professionals/exists/${username}`);

            if (isStaff.data) {
                navigate('/StaffUpdateInfo');
                return;
            }
            if (isEmployer.data) {
                navigate('/EmployerProfile');
                return;
            }
            if (isProfessional.data) {
                navigate('/ProfessionalInfo');
                return;
            }
        } catch (error) {
            console.error('Login failed:', error);
            setState(prevState => ({ ...prevState, passwordError: 'An error occurred during login. Please try again later.' }));
        }
    };

    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
            <h1 className='center'>Employment Agency</h1>
            <h2 className='center'>A recruiting hub that brings talent together!</h2>
            <h3 className='center'>Connect with job seekers and employees</h3>
            <h1 className='center'>Log In</h1>
            <form onSubmit={handleSubmit} className={Styles.container}>
                <label className="label" htmlFor="username">Username:</label>
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={state.username}
                        onChange={handleInputChange}
                    />
                    <p style={{ color: "red" }}>{state.usernameError}</p>
                </div>
                <label className="label" htmlFor="password">Password:</label>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={state.password}
                        onChange={handleInputChange}
                    />
                    <p style={{ color: "red" }}>{state.passwordError}</p>
                </div>
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

export default Login;
