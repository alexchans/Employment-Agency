import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import {Link, useNavigate} from 'react-router-dom';
import EmpPageTemp from "./components/EmpPageTemp";
import Styles from "./ECreateJob.module.css";

// Styled components
const Container = styled.div`
  padding: 40px;
  max-width: 500px;
  margin: 50px auto;
  background-color: #27272b;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
    margin-top: -200px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #191919;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #0062cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #004085;
  }
`;

function ChangePassword() {
    const [credentials, setCredentials] = useState({
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const storedUsername = Cookies.get('username'); // Get username from cookies

    const handleInputChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.newPassword !== credentials.confirmPassword) {
            toast.error('New passwords do not match.');
            return;
        }
        setIsSubmitting(true);

        try {
            const response = await axios.put(`http://localhost:8080/api/login/update-password/${credentials.newPassword}`, {
                username: storedUsername,
                password: credentials.currentPassword,
                userType: 'employer' // or whichever userType is appropriate
            });

            if (response.data) {
                toast.success('Password updated successfully');
            } else {
                throw new Error('Failed to update password');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            toast.error((error.response && error.response.data && error.response.data.message) || 'Failed to update password');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <EmpPageTemp/>
            <ul>
                <li><Link to="/EmployerProfile">Contact Info</Link></li>
                <li><Link to="/EmployerCreateJob">Create Job</Link></li>
                <li><Link to="/EmployerUpdateJob">Update Job</Link></li>
                <li><Link to="/EmployerJobList">Job List</Link></li>
                <li><Link to="/EmployerPayment">Billing</Link></li>
                <li><Link to="/EmployerChangePass">Change Password</Link></li>
                <li><Link to="/EmployerDelete">Delete Account</Link></li>
            </ul>
        <Container>
            <ToastContainer />
            <h1>Change Your Password</h1>
            <Form onSubmit={handleSubmit}>

                <Input
                    name="firstName"
                    placeholder="First Name"
                    value={credentials.firstName}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={credentials.lastName}
                    onChange={handleInputChange}
                    required
                />

                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleInputChange}
                    required
                />

                <Input
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={credentials.currentPassword}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={credentials.newPassword}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={credentials.confirmPassword}
                    onChange={handleInputChange}
                    required
                />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Update Password'}
                </Button>
            </Form>
        </Container>
        </div>
    );
}

export default ChangePassword;
