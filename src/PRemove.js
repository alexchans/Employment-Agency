import React from 'react';
import logo from './img/logo.png';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';


class PRemove extends React.Component {
    render() {
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
                    </ul>
                    <div style={{ paddingRight: '70vw' }}>
                        <h2>Remove Account</h2>
                        <label className="label" htmlFor="phonenumber">Username:</label>
                        <div>
                            <input type="text" id="phonenumber" name="phonenumber" />
                        </div>
                        <label className="label" htmlFor="password">Password:</label>
                        <div>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div style={{ paddingTop: '3vh' }}>
                            <Button variant="contained" size='medium' color='warning'>remove</Button>
                        </div>
                    </div>
                </div>

            </div>










        );




    }

}
export default PRemove;