import React from 'react';
import Styles from './PSignIn.module.css'
import logo from './img/logo.png';
import Button from '@mui/material/Button';

function PSignIn() {
    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
            <h1 className='center'>Professional Sign Up</h1>
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
                    <label className="label" htmlFor="institution">Institution:</label>
                    <div>
                        <input type="text" id="institution" name="institution" />
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="Degree">Degree:</label>
                    <div>
                        <input type="text" id="Degree" name="Degree" />
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="graduationdate">Graduation Date:</label>
                    <div>
                        <input type="text" id="graduationdate" name="graduationdate" />
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="Pusername">Preferred username:</label>
                    <div>
                        <input type="text" id="Pusername" name="Pusername" />
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="category">Category:</label>
                    <div>
                        <input type="text" id="category" name="category" />
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="keys">Key words/phrases</label>
                    <div>
                        <input type="text" id="keys" name="keys" />
                    </div>
                </div>
                <div className='table'>
                    <Button variant="contained" size='small'>Add New Row</Button>
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Key words/phrases</th>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>Java,C++</td>
                        </tr>
                        <tr>
                            <td>Previous Employment</td>
                            <td>Software Engineer</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='center'>
                <Button variant="contained" size='large'>Sign Up</Button>
            </div>
            <hr style={{ width: '30%' }} />
            <div className='center'>
                <a href='#'>Already have an account? Log In</a>
            </div>
        </div>
    );
}

export default PSignIn;