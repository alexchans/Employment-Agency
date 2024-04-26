import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


const PPayment = () => {
    const username = Cookies.get('username'); 
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');
    const [lastPaymentDate, setLastPaymentDate] = useState('');

    useEffect(() => {
        const url = `http://localhost:8080/api/payments/${username}/balance`;
        
        // Function to fetch balance
        const fetchBalance = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setBalance(data); // Assuming the API returns a JSON object with the balance
            } catch (error) {
                console.error('Error fetching balance:', error);
                setWarningMessage('Error fetching balance');
                setShowWarning(true);
            }
        };

        fetchBalance();
    }, [username]);

    const updateLastPaymentDate = async () => {
        const url = `http://localhost:8080/api/payments/${username}/payDate`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setLastPaymentDate(data ? data : 'No payment data'); // Assuming the date is directly returned
        } catch (error) {
            console.error('Error fetching last payment date:', error);
            setWarningMessage('Error fetching last payment date');
            setShowWarning(true);
        }
    };

    

    const updateBalance = async () => {
        const url = `http://localhost:8080/api/payments/${username}/balance`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const newBalance = await response.json();
            setBalance(newBalance); // Assuming the API returns the balance directly
        } catch (error) {
            console.error('Error fetching new balance:', error);
            setWarningMessage('Error fetching new balance');
            setShowWarning(true);
        }
    };

    const handleInputChange = (event) => {
        setAmount(event.target.value);
        setShowWarning(false);
    };

    const handlePayClick = async () => {
        const amountNumber = parseFloat(amount.replace(/,/g, '')); // Remove commas in numbers for parsing
        if (!amount) {
            setShowWarning(true);
            setWarningMessage('Please enter an amount.');
        } else if (isNaN(amountNumber) || amountNumber < 50) {
            setShowWarning(true);
            setWarningMessage('Amount must be at least $50.');
        } else {
            // Create the payload
            const paymentData = {
                paymentAmount: amountNumber 
            };

            try {
                const response = await fetch(`http://localhost:8080/api/payments/${username}/makePayment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentData)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                
                console.log("Payment processed successfully");
                updateBalance();
                updateLastPaymentDate();
            } catch (error) {
                console.error('Error during payment:', error);
                setWarningMessage('Failed to process payment.');
                setShowWarning(true);
            }
        }
    };

    return (
        <div>
            <ProPageTemp />
            <div className='flex'>
                <ul>
                    <li><Link to="/ProfessionalUpdate">Update Info</Link></li>
                    <li><Link to="/ProfessionalBrowse">Browse Job</Link></li>
                    <li><Link to="/ProfessionalInitiate">Initiate Matching</Link></li>
                    <li><Link to="/ProfessionalRemove">Remove</Link></li>
                    <li><Link to="/ProfessionalPayment">Payment</Link></li>
                    <li><Link to="/ProfessionalPassword">Change Password</Link></li>
                </ul>
                <div style={{ paddingRight: '70vw' }}>
                    <h2>Process Payment</h2>
                    <div>
                        <label className="label" htmlFor="date">Last Payment Date:</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="exact date">{lastPaymentDate}</label>
                    </div>
                    <div>
                        <label className="label" htmlFor="balance">Available Balance:</label>
                    </div>
                    <div>
                        {balance !== null ? (
                            <label className="label" htmlFor="exact balance">{balance}</label> 
                        ) : (
                            <label className="label" htmlFor="exact balance">Loading balance...</label>
                        )}
                    </div>
                    <div>
                        <label className="label" htmlFor="amount">Enter Amount:</label>
                        <input type="text" id="amount" name="amount" value={amount} onChange={handleInputChange} />
                    </div>
                    <p>Minimum Amount: $50</p>
                    {showWarning && <p style={{color: 'red'}}>{warningMessage}</p>}
                    <div style={{ paddingTop: '3vh' }}>
                        <Button variant="contained" size='medium' color='success' onClick={handlePayClick}>Pay</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PPayment;
