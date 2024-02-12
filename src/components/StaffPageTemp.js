import React from 'react';
import logo from '../img/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import Styles from './StaffPageTemp.module.css'
import { Link } from 'react-router-dom';

class StaffPageTemp extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" className="logo" />
                <div className='flex'>
                    <h1 className={Styles.title}>Staff Space</h1>
                    <span className={Styles.username}>Alexchans</span>
                    <div className={Styles.logout}>
                        <Link to="/Login"><LogoutIcon /></Link>
                    </div>
                </div>
                <hr className={Styles.line} />
            </div >
        );
    }
}

export default StaffPageTemp;
