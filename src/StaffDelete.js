import React from 'react';
import StaffPageTemp from './components/StaffPageTemp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';

class StaffDelete extends React.Component {
    constructor(props) {
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
    };

    render() {
        return (
            <div>
                <StaffPageTemp />
                <div className='flex'>
                    <ul>
                        <li><Link to="/StaffUpdateInfo">Update Info</Link></li>
                        <li><Link to="/StaffReviewERequests">Review E Requests</Link></li>
                        <li><Link to="/StaffReviewPRequests">Review P Requests</Link></li>
                        <li><Link to="/StaffDeleteAccounts">Delete Accounts</Link></li>
                        <li><Link to="/StaffViewEAccounts">View E Accounts</Link></li>
                        <li><Link to="/StaffViewPAccounts">View P Accounts</Link></li>
                        <li><Link to="/StaffMatching">Initiate Matching</Link></li>
                        <li><Link to="/StaffAddStaff">Add Staff</Link></li>
                    </ul>
                    <div style={{ paddingRight: '58vw' }}>
                        <h2>Review Delete Account Requests</h2>
                        <ul>
                            <div className='flex' >
                                <li onClick={() => this.handleOpenDialog('Alex Chen')}>Alex Chen</li>
                                <Button variant="contained" size='small'>Approve</Button>
                                <Button variant="contained" size='small' style={{ backgroundColor: 'red' }}>Deny</Button>
                            </div>
                            <hr />
                            <div className='flex'>
                                <li onClick={() => this.handleOpenDialog('Logan Lu')}>Logan Lu</li>
                                <Button variant="contained" size='small'>Approve</Button>
                                <Button variant="contained" size='small' style={{ backgroundColor: 'red' }}>Deny</Button>
                            </div>
                            <hr />
                        </ul>
                    </div>
                </div>
                <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog}>
                    <DialogTitle>User Details</DialogTitle>
                    <DialogContent>
                        <p>Account Balance: {this.state.selectedUser === 'Alex Chen' ? '0' : '-200'}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="primary">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default StaffDelete;
