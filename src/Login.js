import React from 'react';
import logo from './img/logo.png';
import Styles from './Login.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" className="logo" />
                <h1 className='center'>Employment Agency</h1>
                <h2 className='center'>A recruiting hub that brings talent together!</h2>
                <h3 className='center'>Connect with job seekers and employees</h3>
                <h1 className='center'>Log In</h1>
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
