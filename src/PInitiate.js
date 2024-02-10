import React from 'react';
import logo from './img/logo.png';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';


class PInitiate extends React.Component {
    render() {
        return (
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
                    <div className='center'>
                        <Button variant="contained" size='medium' color='success'>Initiate Matching</Button>
                    </div>
                    <div style={{paddingRight: '50vw'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th>Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Software Engineer</td>
                                    <td>Google</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a href="/information-page">More Info</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default PInitiate;


