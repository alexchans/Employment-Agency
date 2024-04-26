import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import {Link, useNavigate, useParams} from 'react-router-dom';
import EmpPageTemp from "./components/EmpPageTemp";

// Styled Components

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #000; // Dark theme
  color: #fff; // Text color set to white for contrast
  min-height: 100vh;
    margin-top: -220px;
    
`;

const PaymentCard = styled.div`
  background-color: #1a1a1a; // Dark card background
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1); // Subtle glow for depth
  width: 100%;
  max-width: 500px;
  border: 1px solid #333; // Border color for card
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
    margin-left: -10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff; // Button color
  color: #fff; // Text color
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; // Darken button on hover
  }
`;

const ErrorMessage = styled.div`
  background-color: #561212; // Dark red background for error
  color: #ffdddd; // Light red color for text
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  text-align: center;
`;

function Payment() {
    const [balance, setBalance] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [balanceError, setBalanceError] = useState('Error fetching balance.');
    const username = Cookies.get('username');

    const fetchBalance = useCallback(async () => {
        if (!username) {
            setBalanceError('No username found. Please log in.');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/payments/${username}/balance`);
            setBalance(response.data);
            setBalanceError('');

        } catch (error) {
            console.error('Error fetching balance:', error);
            setBalanceError('Error fetching balance.');
        }
    }, [username]);

    useEffect(() => {
        fetchBalance();
    }, [fetchBalance]);

    const handlePaymentChange = (e) => {
        setPaymentAmount(e.target.value);
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        if (!username) {
            toast.error('No username found. Please log in.');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/api/payments/${username}/makePayment`, {
                paymentAmount: paymentAmount.toString()
            });
            if (response.status === 200) {
                toast.success('Payment successful!');
                setPaymentAmount('');
                fetchBalance(); // Refetch balance after a successful payment
            } else {
                toast.error('Payment not successful. Please try again.');
            }
        } catch (error) {
            console.error('Error making payment:', error.response || error);
            toast.error((error.response && error.response.data && error.response.data.message) || 'Error making payment.');
        }
    };

    return (
        <div>
            <EmpPageTemp/>
            {/*<h3>User: {username || 'Guest'}!</h3>*/}
            <ul>
                <li><Link to="/EmployerProfile">Contact Info</Link></li>
                <li><Link to="/EmployerCreateJob">Create Job</Link></li>
                <li><Link to="/EmployerUpdateJob">Update Job</Link></li>
                <li><Link to="/EmployerJobList">Job List</Link></li>
                <li><Link to="/EmployerPayment">Billing</Link></li>
                <li><Link to="/EmployerChangePass">Change Password</Link></li>
                <li><Link to="/EmployerDelete">Delete Account</Link></li>
            </ul>
        <PaymentContainer>
            <ToastContainer />
            <PaymentCard>
                <h2>Make a Payment</h2>
                {balanceError && <ErrorMessage>{balanceError}</ErrorMessage>}
                <Input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={paymentAmount}
                    onChange={handlePaymentChange}
                    placeholder="Enter payment amount"
                />
                <Button onClick={handlePaymentSubmit}>Submit Payment</Button>
            </PaymentCard>
            {!balanceError && balance !== '' && (
                <PaymentCard>
                    <h3>Your Current Balance</h3>
                    <p>${balance}</p>
                </PaymentCard>
            )}
        </PaymentContainer>
        </div>
    );
}

export default Payment;