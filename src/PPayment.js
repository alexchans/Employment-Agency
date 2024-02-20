import React from 'react';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';

class PPayment extends React.Component {
    state = {
        amount: '', 
        showWarning: false, 
        warningMessage: '', 
    };
    handleInputChange = (event) => {
        const amount = event.target.value;
        this.setState({ amount: amount, showWarning: false }); 
    };

    
    handlePayClick = () => {
        const { amount } = this.state;
        const amountNumber = parseFloat(amount); 
        if (!amount) {
            this.setState({ showWarning: true, warningMessage: 'Please enter an amount.' }); 
        } else if (isNaN(amountNumber) || amountNumber < 50) {
            this.setState({ showWarning: true, warningMessage: 'Amount must be at least $50.' }); 
        } else {
            console.log("Processing payment for amount:", amount);
            
        }
    };

    render() {
        const { amount, showWarning, warningMessage } = this.state;

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
                            <label className="label" htmlFor="exact date">2/1/2024</label>
                        </div>
                        <div>
                            <label className="label" htmlFor="balance">Available Balance:</label>
                        </div>
                        <div>
                            <label className="label" htmlFor="exact balance">$1000</label>
                        </div>
                        <div>
                            <label className="label" htmlFor="amount">Enter Amount:</label>
                            <input type="text" id="amount" name="amount" value={amount} onChange={this.handleInputChange} />
                        </div>
                        <p>Minimum Amount: $50</p>
                        {showWarning && <p style={{color: 'red'}}>{warningMessage}</p>}
                        <div style={{ paddingTop: '3vh' }}>
                            <Button variant="contained" size='medium' color='success' onClick={this.handlePayClick}>Pay</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PPayment;
