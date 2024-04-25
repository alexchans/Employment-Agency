import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import EmpPageTemp from './components/EmpPageTemp';
import Popup from './EJobListComp/Popup';
import InputField from './EJobListComp/InputField';
import { Link } from "react-router-dom";

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #000; // Set to black for dark theme
  color: #fff; // Text color set to white for contrast
  min-height: 100vh;
`;

const ProfileCard = styled.div`
  background-color: #1a1a1a; // Darker card background
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1); // Lighter shadow for depth
  width: 100%;
  max-width: 500px;
  border: 1px solid #333; // Border color for card
    margin-top: -200px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
  border-bottom: 1px solid #333; // Separator with a subtle border
`;

const Label = styled.span`
  font-weight: bold;
  color: #bbb; // Slightly lighter color for the label
`;

const Data = styled.span`
  color: #ddd; // Light grey color for data for better readability
`;

// Additional Styled Components
const SubHeader = styled.h2`
  color: #fff; // White text for visibility on the dark background
  margin-top: -250px; // Spacing above the subheader
    position: absolute;
`;

const UpdateButton = styled.button`
  background-color: #555; // Dark button background
  color: #fff; // White text for visibility
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px; // Spacing above the button
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #777; // Lighten the button on hover for feedback
  }
`;

// EmployerProfile Component
function EmployerProfile() {
    const [employer, setEmployer] = useState(null);
    const username = Cookies.get('username'); // Directly assigning the hardcoded username

    useEffect(() => {
        let isMounted = true; // Track whether the component is mounted

        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/employer/profile/${username}`);
                if (isMounted) { // Only update state and show toast if the component is mounted
                    setEmployer(response.data);
                    toast.success('Profile loaded successfully!');
                }
            } catch (error) {
                console.error('Failed to fetch profile:', error);
                if (isMounted) {
                    toast.error('Failed to load profile. Please try again later.');
                }
            }
        };

        fetchProfile();

        return () => {
            isMounted = false; // Clean up the isMounted flag when the component unmounts
        };
    }, [username]); // Added username as a dependency

    return (
        <div><EmpPageTemp/>
            <h3>Welcome, {username || 'Guest'}!</h3>
            <ul>
                <li><Link to="/EmployerProfile">Contact Info</Link></li>
                <li><Link to="/EmployerCreateJob">Create Job</Link></li>
                <li><Link to="/EmployerUpdateJob">Update Job</Link></li>
                <li><Link to="/EmployerJobList">Job List</Link></li>
                <li><Link to="/EmployerPayment">Billing</Link></li>
                <li><Link to="/EmployerChangePass">Change Password</Link></li>
                <li><Link to="/EmployerDelete">Delete Account</Link></li>
            </ul>
            <ProfileContainer>
                <ToastContainer/>
                <SubHeader>Profile</SubHeader> {/* Subheader for the profile section */}
                {employer ? (
                    <>
                        <ProfileCard>
                            <InfoRow><Label>Username:</Label> <Data>{employer.username}</Data></InfoRow>
                            <InfoRow><Label>Name:</Label>
                                <Data>{employer.firstName} {employer.lastName}</Data></InfoRow>
                            <InfoRow><Label>Company:</Label> <Data>{employer.companyName}</Data></InfoRow>
                            <InfoRow><Label>Email:</Label> <Data>{employer.email}</Data></InfoRow>
                            <InfoRow><Label>Phone:</Label> <Data>{employer.phoneNumber}</Data></InfoRow>
                            <InfoRow><Label>Address:</Label>
                                <Data>{employer.streetAddress}, {employer.city}, {employer.state} {employer.zipcode}</Data></InfoRow>
                        </ProfileCard>
                        <Link to="/path-to-update-profile"> {/* Replace with your actual path */}
                            <UpdateButton>Update Profile</UpdateButton>
                        </Link>
                    </>
                ) : (
                    <p>Loading profile...</p>
                )}
            </ProfileContainer>
        </div>
    );
}

export default EmployerProfile;
