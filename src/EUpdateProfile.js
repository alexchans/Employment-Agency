import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Cookies from 'js-cookie';
import EmpPageTemp from "./components/EmpPageTemp";

const Container = styled.div`
  background-color: #000; // Dark background
  color: #fff; // White text color
  padding: 50px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: #333; // Slightly lighter background for the form
  padding: 20px;
  border-radius: 10px;
    height: 550px;
    margin-top: -220px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  background-color: #555;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function UpdateProfile() {
    const [employer, setEmployer] = useState({
        username: '', firstName: '', lastName: '', companyName: '',
        email: '', phoneNumber: '', streetAddress: '', city: '',
        state: '', zipcode: ''
    });
    const navigate = useNavigate();
    const username = Cookies.get('username'); // Assuming username is part of the URL

    useEffect(() => {

        let isMounted = true; // Track whether the component is mounted

        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/employer/profile/${username}`);
                if (isMounted) { // Only update state and show toast if the component is mounted
                    setEmployer(response.data);
                    //toast.success('Profile loaded successfully!');
                }
                /*setEmployer(response.data);
                toast.success('Profile loaded successfully!');*/
            } catch (error) {
                console.error('Failed to fetch profile:', error);
                if (isMounted) {
                    toast.error('Failed to load profile. Please try again later.');
                }
                /*toast.error('Failed to load profile. Please try again later.');*/
            }
        };

        fetchProfile();
    }, [username]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/employer/update`, employer);
            toast.success('Profile updated successfully!');
            navigate('/EmployerProfile'); // Redirect to the profile view page or some other page as appropriate
        } catch (error) {
            console.error('Failed to update profile:', error);
            toast.error('Failed to update profile. Please try again.');
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
                <ToastContainer/>
                <Form onSubmit={handleSubmit}>
                    <h2>Update Profile</h2>
                    <Input
                        type="text"
                        name="username"
                        value={employer.username}
                        onChange={handleChange}
                        placeholder="Username"
                        readOnly // This field is read-only and cannot be changed
                    />
                    <Input
                        type="text"
                        name="firstName"
                        value={employer.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <Input
                        type="text"
                        name="lastName"
                        value={employer.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <Input
                        type="text"
                        name="companyName"
                        value={employer.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                    />
                    <Input
                        type="email"
                        name="email"
                        value={employer.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <Input
                        type="text"
                        name="phoneNumber"
                        value={employer.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                    <Input
                        type="text"
                        name="streetAddress"
                        value={employer.streetAddress}
                        onChange={handleChange}
                        placeholder="Street Address"
                    />
                    <Input
                        type="text"
                        name="city"
                        value={employer.city}
                        onChange={handleChange}
                        placeholder="City"
                    />
                    <Input
                        type="text"
                        name="state"
                        value={employer.state}
                        onChange={handleChange}
                        placeholder="State"
                    />
                    <Input
                        type="text"
                        name="zipcode"
                        value={employer.zipcode}
                        onChange={handleChange}
                        placeholder="Zip Code"
                    />
                    <Button type="submit">Save Changes</Button>
                </Form>
            </Container>
            </div>
    );
}

export default UpdateProfile;
