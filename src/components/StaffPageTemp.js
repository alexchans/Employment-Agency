import React from 'react';
import logo from '../img/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import Styles from './StaffPageTemp.module.css'

class StaffPageTemp extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" className="logo" />
                <div className={Styles.flex}>
                    <h1 className={Styles.title}>StaffSpace</h1>
                    <span className={Styles.username}>Alexchans</span>
                    <div className={Styles.logout}> <LogoutIcon /></div>
                </div>
                <hr className={Styles.line} />
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
            </div >
        );
    }
}

export default StaffPageTemp;
