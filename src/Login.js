import React from 'react';
import logo from './img/logo.png';
import Styles from './Login.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        validationMessage: ''
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value, validationMessage: '' });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        if (!username && !password) {
            this.setState({ validationMessage: 'Username and Password cannot be empty.' });
            return;
        }
        if (!username) {
            this.setState({ validationMessage: 'Username cannot be empty.' });
            return;
        }
        if (!password) {
            this.setState({ validationMessage: 'Password cannot be empty.' });
            return;
        }
    };

    render() {
        const { validationMessage } = this.state;

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
                    <p style={{ color: "red" }}>{validationMessage}</p>
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
