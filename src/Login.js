import React from 'react';
import logo from './img/logo.png';
import Styles from './Login.module.css';
import Button from '@mui/material/Button';

class Login extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" className="logo" />
                <h1>Employment Agency</h1>
                <h2>A recruiting hub that brings talent together!</h2>
                <h3>Connect with job seekers and employees</h3>
                <h1>Log In</h1>
                <div className={Styles.container}>
                    <label className="label" htmlFor="username">Username:</label>
                    <div>
                        <input type="text" id="username" name="username" />
                    </div>
                    <label className="label" htmlFor="password">Password:</label>
                    <div>
                        <input type="text" id="password" name="password" />
                    </div>
                </div>
                <div className={Styles.button}>
                    <Button variant="contained" size='large'>Log In</Button>
                </div>
                <hr style={{ width: '40%' }} />
                <h4>Don't have an account yet?</h4>
                <div className='center'>
                    <a href='#'>Professional Sign Up</a>
                    <span style={{ padding: 5 }}>|</span>
                    <a href='#'>Employer Sign Up</a>
                </div>
            </div>
        );
    }
}

export default Login;
