import React from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProPageTemp from './components/ProPageTemp';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';



class PInitiate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openDialog: false,
            selectedUser: null
        };
    }

    handleOpenDialog = (user) => {
        this.setState({
            openDialog: true,
            selectedUser: user
        });
    };

    handleCloseDialog = () => {
        this.setState({
            openDialog: false,
            selectedUser: null
        });
    }

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
                                    <td><Link to="/ProfessionalInfo">More Info</Link></td>
                                </tr>
                                <tr>
                                    <td>UX Engineer</td>
                                    <td>Netflix</td>
                                    <td><a onClick={()=> this.handleOpenDialog('UX')}>More Info</a></td>
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
                <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog}>
                    <DialogTitle>UX Engineer</DialogTitle>
                    <DialogContent>
                        <p>Company: Netflix</p>
                        <p>ID: 43994399</p>
                        <p>Position: UX Engineer</p>
                        <p>Person: Michael Jordan</p>
                        <p>Phone: 111-111-1111</p>
                        <p>Email: mjordan@smu.edu</p>
                        <p>Date: 2/1/2024-2/10/2024</p>
                        <p>Hours: 10am-3pm</p>
                        <p>Salary: $100/hour</p>
                        <p>Qualification:</p>
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
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="primary">Close</Button>
                    </DialogActions>
                        
                </Dialog>
            </div>
        );
    }
}

export default PInitiate;


