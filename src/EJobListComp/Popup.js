// Popup.js
import React from 'react';
import Styles from './EComponents.module.css'

function Popup({ isOpen, onClose, jobDetails }) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#282828',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 100,
            width: '80%',
            maxWidth: '600px',
            color: '#ffffff',
            marginLeft: '80px',
            marginTop: '45px',
            border: '1px solid #ffffff'


        }}>
            <h2>{jobDetails.title}</h2>
            <p>ID: {jobDetails.id}</p>
            <div className={Styles.divider1}></div>
            <div className={Styles.label1}>Hiring Manage Information</div>
            <div className={Styles.divider2}></div>
            <div className={Styles.text2}><p>Manager: {jobDetails.firstName} {jobDetails.lastName} </p></div>
            <div className={Styles.text2}><p>Contact: {jobDetails.phoneNumber}</p></div>
            <div className={Styles.text3}><p>Email: {jobDetails.email}</p></div>
            <div className={Styles.label2}>Job Information</div>
            <div className={Styles.divider3}></div>
            <div className={Styles.text2}><p>Period: From {jobDetails.startDate} to {jobDetails.endDate}  </p></div>
            <div className={Styles.text2}><p>Time: From {jobDetails.startTime} to {jobDetails.endTime}</p></div>
            <div className={Styles.text4}><p>Pay per Hour: ${jobDetails.wage}/hour</p></div>
            <div className={Styles.label3}>Qualifications</div>
            <div className={Styles.divider4}></div>
            <div className={Styles.text2}><p>Category: {jobDetails.category}</p></div>
            <div className={Styles.text2}><p>Keywords: {jobDetails.keyWords}</p></div>
            <div className={Styles.label4}>Descriptions</div>
            <div className={Styles.divider5}></div>
            <div className={Styles.text2}><p>{jobDetails.description}</p></div>


            {/* Include other job details */}
            <button onClick={onClose}
                    style={{
                        cursor: 'pointer',
                        marginLeft: '550px',
                        backgroundColor: '#61aacf',
                        border: '1px solid #61aacf',
                        borderRadius: '8px',
                        fontWeight: '600'
                    }}>Close
            </button>
        </div>
    );
}

export default Popup;
