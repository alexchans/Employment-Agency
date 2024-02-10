import React from 'react';
import logo from './img/logo.png';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';


class PRemove extends React.Component {
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