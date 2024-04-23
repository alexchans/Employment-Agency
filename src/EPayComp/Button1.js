import React from 'react';

const styles = {
    Button: {
        cursor: 'pointer',
        top: '490px',
        left: '576px',
        width: '560px',
        height: '58px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#61aacf',
        color: '#000000',
        fontSize: '20px',
        fontFamily: 'Roboto',
        fontWeight: 700,
        lineHeight: '26px',
        outline: 'none',
        position: 'absolute'
    },
};

const defaultProps = {
    label: 'Pay $50.00',
};

const Button = ({ label, onClick }) => {
    return (
        <button style={styles.Button} onClick={onClick}>
            {label}
        </button>
    );
};


export default Button;