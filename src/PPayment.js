import React from 'react';
import logo from './img/logo.png';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';


class PPayment extends React.Component {
    render() {
        return(
            <div>
                <ProPageTemp />
                <div className='flex'>
                    <ul>
                        <li>Update Info</li>
                        <li>Browse Job</li>
                        <li>Initiate Matching</li>
                        <li>Delete Accounts</li>
                        <li>Payment</li>
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
                        <label className="label" htmlFor="balance">Avaliable Balance:</label>
                        </div>
                        <div>
                        <label className="label" htmlFor="exact balance">$1000</label>
                        </div>
                        <div> 
                        <label className="label" htmlFor="amount">Enter Amount:</label>
                            <input type="text" id="amount" name="amount"/>
                        </div>
                        <p> Minimum Amount: $50</p>
                        <div style={{ paddingTop: '3vh' }}>
                            <Button variant="contained" size='medium' color='success'>Pay</Button>
                        </div>
                    </div>
                </div>

            </div>










        );




    }

}
export default PPayment;