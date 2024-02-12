import React from 'react';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import { Link } from 'react-router-dom';

import Styles from './PUpdate.module.css';








class PUpdate extends React.Component {
    render() {
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
                    </ul>
                    <h1 className='center'>Update Info</h1>
                    <div className={Styles.grid}>
                        <div>
                            <label className="label" htmlFor="email">Email</label>
                            <div>
                                <input type="text" id="email" name="email" />
                            </div>
                        </div>
                        <div>
                            <label className="label" htmlFor="phone number">Phone Number:</label>
                            <div>
                                <input type="text" id="phone number" name="phone number" />
                            </div>
                        </div>
                        <div>
                            <label className="label" htmlFor="institution">Institution:</label>
                            <div>
                                <input type="text" id="institution" name="institution" />
                            </div>
                        </div>
                        <div>
                            <label className="label" htmlFor="degree">Degree:</label>
                            <div>
                                <input type="text" id="degree" name="degree" />
                            </div>
                        </div>
                        <div>
                            <label className="label" htmlFor="streetaddress">Mailing Address:</label>
                            <div>
                                <input type="text" id="streetaddress" name="streetaddress" />
                            </div>
                        </div>
                        <div>
                            <label className="label" htmlFor="date">Graduation Date:</label>
                            <div>
                                <input type="text" id="date" name="date" />
                            </div>
                        </div>
                        <div>
                            <label className="label" htmlFor="category">Category:</label>
                            <div>
                                <input type="text" id="category" name="category" />
                            </div>
                        </div>
                        <div>
                            <label className="label" htmlFor="keys">Key words/phrases</label>
                            <div>
                                <input type="text" id="keys" name="keys" />
                            </div>
                        </div>
                        <div className='table'>
                            <Button variant="contained" size='small'>Add New Row</Button>
                            <table>
                                <tr>
                                    <th>Category</th>
                                    <th>Key words/phrases</th>
                                </tr>
                                <tr>
                                    <td>Languages</td>
                                    <td>Java,C++</td>
                                </tr>
                                <tr>
                                    <td>Previous Employment</td>
                                    <td>Software Engineer</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='center'>
                    <Button variant="contained" size='medium' color='success'>Confirm</Button>
                </div>
            </div>










        );
    }



}














export default PUpdate;