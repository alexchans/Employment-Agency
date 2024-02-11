import React from 'react';
import StaffPageTemp from './components/StaffPageTemp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

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
                        <li>Update Info</li>
                        <li>Review E Requests</li>
                        <li>Review P Requests</li>
                        <li>Delete Accounts</li>
                        <li>View E Accounts</li>
                        <li>View P Accounts</li>
                        <li>Initiate Matching</li>
                        <li>Add Staff</li>
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
