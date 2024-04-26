import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Styles from './PUpdate.module.css';
import logo from './img/logo.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ProPageTemp from './components/ProPageTemp';
import Cookies from 'js-cookie';

const PUpdate = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        streetAddress: '',
        zipcode: '',
        city: '',
        state: '',
        username: Cookies.get('username'),
        institution: '',
        degree: '',
        graduationDate: '',
        category: '',
        keys: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        phoneNumberError: '',
        streetAddressError: '',
        zipcodeError: '',
        cityError: '',
        stateError: '',
        institutionError: '',
        degreeError: '',
        graduationDateError: '',
        categoryError: '',
        keysError: '',

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
            [`${name}Error`]: ''
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errors = {};
        let isValid = true;

        Object.keys(state).forEach(key => {
            if (key.endsWith('Error') || ['categoriesAndKeys', 'tableError'].includes(key)) return;

            if (!state[key]) {
                errors[`${key}Error`] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty.`;
                isValid = false;
            }
        });

        if (!isValid) {
            setState(prevState => ({
                ...prevState,
                ...errors
            }));
        } else {
            
            const updateRequest = {
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                phoneNumber: state.phoneNumber,
                streetAddress: state.streetAddress,
                zipcode: state.zipcode,
                city: state.city,
                state: state.state,
                username : state.username,
                institution: state.institution,
                degree: state.degree,
                graduationDate: state.graduationDate,
                category: state.category,
                keys: state.keys
            };

            try {
                const response = await axios.put('http://localhost:8080/api/professionals/update', updateRequest);
                console.log('Server response:', response.data);
                alert('Update successfully!');
                
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Update has failed');
                
            }
        }
    };

    return (
        <div>
             <ProPageTemp />
             <div className='center'>
                <h1>Professional Update</h1>
            </div>
             <ul>
                    <li><Link to="/ProfessionalUpdate">Update Info</Link></li>
                    <li><Link to="/ProfessionalBrowse">Browse Job</Link></li>
                    <li><Link to="/ProfessionalInitiate">Initiate Matching</Link></li>
                    <li><Link to="/ProfessionalRemove">Remove</Link></li>
                    <li><Link to="/ProfessionalPayment">Payment</Link></li>
                    <li><Link to="/ProfessionalPassword">Change Password</Link></li>
            </ul>
            <img src={logo} alt="Logo" className="logo" />
            <div>
            <form onSubmit={handleSubmit} className={Styles.form} style={{ paddingLeft: '30vw' }}>
                <div className={Styles.grid}>
                    <div>
                        <label className="label" htmlFor="firstName">First Name:</label>
                        <div>
                            <input type="text" id="firstName" name="firstName" value={state.firstName}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.firstNameError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="lastName">Last Name:</label>
                        <div>
                            <input type="text" id="lastName" name="lastName" value={state.lastName}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.lastNameError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="email">Email:</label>
                        <div>
                            <input type="email" id="email" name="email" value={state.email}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.emailError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="phoneNumber">Phone Number:</label>
                        <div>
                            <input type="text" id="phoneNumber" name="phoneNumber" value={state.phoneNumber}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.phoneNumberError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="streetAddress">Street Address:</label>
                        <div>
                            <input type="text" id="streetAddress" name="streetAddress" value={state.SA}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.streetAddressError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="zipcode">ZipCode:</label>
                        <div>
                            <input type="text" id="zipcode" name="zipcode" value={state.zipcode}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.zipcodeError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="city">City:</label>
                        <div>
                            <input type="text" id="city" name="city" value={state.city}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.cityError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="state">State:</label>
                        <div>
                            <input type="text" id="state" name="state" value={state.state}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.stateError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="institution">Institution:</label>
                        <div>
                            <input type="text" id="institution" name="institution" value={state.institution}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.institutionError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="degree">Degree:</label>
                        <div>
                            <input type="text" id="degree" name="degree" value={state.degree}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.degreeError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="graduationDate">Graduation Date:</label>
                        <div>
                            <input type="text" id="graduationDate" name="graduationDate" value={state.graduationDate}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.graduationDateError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="category">Category:</label>
                        <div>
                            <input type="text" id="category" name="category" value={state.category}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.categoryError}</p>
                    </div>
                    <div>
                        <label className="label" htmlFor="keys">Key words/phrases</label>
                        <div>
                            <input type="text" id="keys" name="keys" value={state.keys}
                                onChange={handleInputChange} />
                        </div>
                        <p style={{ color: "red" }}>{state.keysError}</p>
                    </div>
                </div>
                <div className={Styles.button}>
                    <Button type="submit" variant="contained" size='large'>Update</Button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default PUpdate;
