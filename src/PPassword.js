import React from 'react';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';



class PPassword extends React.Component {
    state = {
        currentpassword: '',
        newpassword: '',
        confirmpassword: '',
        currentpasswordError: '',
        newpasswordError: '',
        confirmpasswordError: ''


    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            [`${name}Error`]: '',
        });
    };


    handleSubmit = (event) => {

        event.preventDefault();
        const { currentpassword, newpassword, confirmpassword } = this.state;
        this.setState({ currentpasswordError: '', newpasswordError: '', confirmpasswordError: '' });
        if (!currentpassword) {
            this.setState({ currentpasswordError: 'Current Password cannot be empty.' });
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(currentpassword)) {
            this.setState({ currentpasswordError: 'Password must be at least 8 characters long and include at least one letter and one number.' });
        }
        if (!newpassword) {
            this.setState({ newpasswordError: 'New Password cannot be empty.' });
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newpassword)) {
            this.setState({ newpasswordError: 'Password must be at least 8 characters long and include at least one letter and one number.' });
        } else if (newpassword === currentpassword) {
            this.setState({ newpasswordError: 'New Password must be different from Current Password.' });
        }
        if (!confirmpassword) {
            this.setState({ confirmpasswordError: 'Confirm Password cannot be empty.' });
        } else if (confirmpassword !== newpassword) {
            this.setState({ confirmpasswordError: 'Passwords do not match.' });
        }
        return;
    };




    render(){
        const { currentpassword, newpassword, confirmpassword, currentpasswordError, newpasswordError, confirmpasswordError } = this.state;
        return(
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
                    <div style={{paddingRight: '50vw'}}>
                        <div>
                            <label className="label" htmlFor="currentpassword">Current Password:</label>
                        </div>
                        <div>
                            <input type="text" id="currentpassword" name="currentpassword" value={currentpassword} onChange={this.handleInputChange}/>
                        </div>
                        <p style={{color: "red"}}>{currentpasswordError}</p>
                        <div>
                            <label className="label" htmlFor="newpassword">New Password:</label>
                        </div>
                        <div>
                            <input type="text" id="newpassword" name="newpassword" value={newpassword} onChange={this.handleInputChange}/>
                        </div>
                        <p style={{color: "red"}}>{newpasswordError}</p>
                        <div>
                            <label className="label" htmlFor="confirmpassword">Confirm Password:</label>
                        </div>
                        <div>
                            <input type="text" id="confirmpassword" name="confirmpassword" value ={confirmpassword} onChange={this.handleInputChange}/>
                        </div>
                        <p style={{color: "red"}}>{confirmpasswordError}</p>
                        <div className='center'>
                        <Button variant="contained" size='medium' color='success' onClick={this.handleSubmit}>Change Password</Button>
                    </div>  
                    </div>
                    </div>
            </div>











        );
    }

















}



export default PPassword;


