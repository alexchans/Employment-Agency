import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import {Link, useNavigate} from 'react-router-dom';
import EmpPageTemp from "./components/EmpPageTemp";
import Styles from "./ECreateJob.module.css";

// Styled components
const Container = styled.div`
    justify-content: center;
    padding: 40px;
    max-width: 600px;
    margin: 50px auto;
    background-color: #27272b;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #fff;
    z-index: 10;
    position: relative;
    margin-top: -180px;
    

`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: #191919;
    color: white;
    width: 580px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #dc3545; // Bootstrap danger color for deletion
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #c82333;
  }
`;

const UserInfo = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #191919;
  border-radius: 5px;
`;

function DeleteAccount() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const storedUsername = Cookies.get('username'); // Assuming the username is stored in cookies

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/employer/profile/${storedUsername}`);
                setUserInfo(response.data);
                setCredentials({ ...credentials, username: response.data.username });
            } catch (error) {
                console.error('Error fetching user info:', error);
                toast.error('Failed to fetch user information');
            }
        };

        if (storedUsername) {
            fetchUserInfo();
        }
    }, [storedUsername]);

    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleDeletionRequest = async () => {
        setIsSubmitting(true);
        try {
            //Check credentials before sending deletion request
            const authResponse = await axios.post('http://localhost:8080/api/login/verify', credentials);
            if (authResponse.status !== 200) {
                throw new Error('Authentication failed');
            }

            const response = await axios.post('http://localhost:8080/api/employer-deletion-requests/create', {
                username: credentials.username,
            });
            if (response.status === 200 || response.status === 201) {
                toast.success('Deletion request submitted successfully');
            } else {
                throw new Error('Failed to submit deletion request');
            }
        } catch (error) {
            console.error('Error submitting deletion request:', error);
            toast.error((error.response && error.response.data && error.response.data.message) || 'Failed to submit deletion request');
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
            <h1>Request Account Deletion</h1>
            {userInfo && (
                <UserInfo>
                    <p><strong>Username:</strong> {userInfo.username}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Full Name:</strong> {userInfo.firstName} {userInfo.lastName}</p>
                    <p><strong>Contact Number:</strong> {userInfo.phoneNumber}</p>
                </UserInfo>
            )}
            <Input
                type="password"
                placeholder="Enter your password to confirm"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
            />
            <Button onClick={handleDeletionRequest} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request Deletion'}
            </Button>
        </Container>
        </div>
    );
}

export default DeleteAccount;
