import React from 'react';
import Styles from './ESignIn.module.css'
import logo from './img/logo.png';
import Button from '@mui/material/Button';

class ESignIn extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" className="logo" />
                <h1>Employer Sign Up</h1>
                <hr style={{ width: '60%' }} />
                <div className={Styles.grid}>
                    <div>
                        <label className="label" htmlFor="firstname">First Name:</label>
                        <div>
                            <input type="text" id="firstname" name="firstname" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="lastname">Last Name:</label>
                        <div>
                            <input type="text" id="lastname" name="lastname" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="email">Email:</label>
                        <div>
                            <input type="text" id="email" name="email" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="phonenumber">Phone Number:</label>
                        <div>
                            <input type="text" id="phonenumber" name="phonenumber" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="streetaddress">Street Address:</label>
                        <div>
                            <input type="text" id="streetaddress" name="streetaddress" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="zipcode">ZipCode:</label>
                        <div>
                            <input type="text" id="zipcode" name="zipcode" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="city">City:</label>
                        <div>
                            <input type="text" id="city" name="city" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="state">State:</label>
                        <div>
                            <input type="text" id="state" name="state" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="company">Company:</label>
                        <div>
                            <input type="text" id="company" name="company" />
                        </div>
                    </div>
                    <div>
                        <label className="label" htmlFor="Pusername">Preferred Username:</label>
                        <div>
                            <input type="text" id="Pusername" name="Pusername" />
                        </div>
                    </div>
                </div>
                <div className={Styles.button}>
                    <Button variant="contained" size='large'>Sign Up</Button>
                </div>
                <hr style={{ width: '30%' }} />
                <div className='center'>
                    <a href='#'>Already have an account? Log In</a>
                </div>
            </div>
        );
    }
}

export default ESignIn;