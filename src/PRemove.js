import React from 'react';
import logo from './img/logo.png';
import Styles from './PRemove.module.css';
import Button from '@mui/material/Button';


function PRemove() {

    return (

          <div>
            <img src={logo} alt="Logo" className="logo" />
            <h1>Professional Space</h1>
            <hr style={{ width: '80%' }} />
            
            <h2>Remove Account</h2>
            <div className={Styles.container}>
                <div>
                    <label className="label" htmlFor="username">Enter Username:</label>
                        <div>
                            <input type="text" id="username" name="username" />
                        </div>
                </div>
                <div>
                    <label className="label" htmlFor="password">Enter Password:</label>
                        <div>
                            <input type="text" id="password" name="password" />
                        </div>
                </div>
            
            </div>
            <div className='center' style={{marginTop: '20px'}}>
                <Button variant="contained" color="warning" size="large" >Delete</Button>
            </div>
          </div>
        
      );
      
      
}

export default PRemove;