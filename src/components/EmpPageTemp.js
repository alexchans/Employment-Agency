import React from 'react';
import logo from '../img/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import Styles from './EmpPageTemp.module.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function StaffPageTemp() {
    const username = Cookies.get('username');

    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
            <div className='flex'>
                <h1 className={Styles.title}>Employer Space</h1>
                <span className={Styles.username}>{username}</span> {/* Displaying the passed username */}
                <div className={Styles.logout}>
                    <Link to="/Login">
                        <LogoutIcon />
                    </Link>
                </div>
            </div>
            <hr className={Styles.line} />
        </div>
    );
}

export default StaffPageTemp;
