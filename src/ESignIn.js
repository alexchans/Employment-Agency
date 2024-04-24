import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import logo from './img/logo.png';
import Styles from './ESignIn.module.css';
import Button from '@mui/material/Button';

function ESignIn() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        streetAddress: '',
        zipcode: '',
        city: '',
        state: '',
        companyName: '',
        username: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [`${name}Error`]: ''
        }));
    };

    const validateField = (field, value) => {
        if (!value) {
            return `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} cannot be empty.`;
        }
        if (field === 'username' && !/^[A-Za-z][A-Za-z0-9]{7,}$/.test(value)) {
            return 'Username must be at least 8 characters long and start with a letter.';
        }
        if (field === 'email' && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return 'Invalid email format.';
        }
        if (field === 'phoneNumber' && !/^(\+\d{1,2}\s?)?1?\-?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)) {
            return 'Invalid phone number format.';
        }
        return '';
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let isValid = true;
        const newErrors = {};

        Object.keys(formData).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[`${field}Error`] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);

        if (isValid) {
            try {
                const response = await axios.post('http://localhost:8080/api/employerRequests/create', formData);
                console.log(response.data);
                alert('Employer registered successfully!');
                navigate('/Login');  // Assuming you want to navigate to some route after successful registration
            } catch (error) {
                console.error('There was an error!', error.response || error);
                alert('Failed to register employer. Please check your input and try again.');
            }
        }
    };

    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
            <h1 className='center'>Employer Sign Up</h1>
            <hr style={{ width: '60%' }} />
            <form onSubmit={handleSubmit}>
                <div className={Styles.grid}>
                    {['firstName', 'lastName', 'email', 'phoneNumber', 'streetAddress', 'zipcode', 'city', 'state', 'companyName', 'username'].map((field) => (
                        <div key={field}>
                            <label className="label" htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
                            <div>
                                <input
                                    type="text"
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <p style={{ color: "red" }}>{errors[`${field}Error`]}</p>
                        </div>
                    ))}
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

export default ESignIn;
