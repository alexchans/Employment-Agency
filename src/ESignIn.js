import React from 'react';
import Styles from './ESignIn.module.css'
import logo from './img/logo.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class ESignIn extends React.Component {
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
        const { firstname, lastname, email, phonenumber, SA, zipcode, city, state, company, username } = this.state;
        const fields = { firstname, lastname, email, phonenumber, SA, zipcode, city, state, company, username };
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
        const { firstnameError, lastnameError, emailError, phonenumberError, SAError, zipcodeError, cityError, stateError, companyError, usernameError } = this.state;
        return (
            <div>
                <img src={logo} alt="Logo" className="logo" />
                <h1 className='center'>Employer Sign Up</h1>
                <hr style={{ width: '60%' }} />
                <form onSubmit={this.handleSubmit}>
                    <div className={Styles.grid}>
                        <div>
                            <label className="label" htmlFor="firstname">First Name:</label>
                            <div>
                                <input type="text" id="firstname" name="firstname" value={this.state.firstname}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{firstnameError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="lastname">Last Name:</label>
                            <div>
                                <input type="text" id="lastname" name="lastname" value={this.state.lastname}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{lastnameError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="email">Email:</label>
                            <div>
                                <input type="text" id="email" name="email" value={this.state.email}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{emailError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="phonenumber">Phone Number:</label>
                            <div>
                                <input type="text" id="phonenumber" name="phonenumber" value={this.state.phonenumber}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{phonenumberError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="SA">Street Address:</label>
                            <div>
                                <input type="text" id="SA" name="SA" value={this.state.SA}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{SAError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="zipcode">ZipCode:</label>
                            <div>
                                <input type="text" id="zipcode" name="zipcode" value={this.state.zipcode}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{zipcodeError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="city">City:</label>
                            <div>
                                <input type="text" id="city" name="city" value={this.state.city}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{cityError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="state">State:</label>
                            <div>
                                <input type="text" id="state" name="state" value={this.state.state}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{stateError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="company">Company:</label>
                            <div>
                                <input type="text" id="company" name="company" value={this.state.company}
                                    onChange={this.handleInputChange} />
                            </div>
                            <p style={{ color: "red" }}>{companyError}</p>
                        </div>
                        <div>
                            <label className="label" htmlFor="username">Preferred Username:</label>
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
                        </div>
                    </div>
                    <div className={Styles.button}>
                        <Button type="submit" variant="contained" size='large'>Sign Up</Button>
                    </div>
                </form>
                <hr style={{ width: '30%' }} />
                <div className='center'>
                    <Link to="/Login">Already have an account? Log In</Link>
                </div>
            </div>
        );
    }
}

export default ESignIn;