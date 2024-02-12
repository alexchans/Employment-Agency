import React from 'react';

const styles = {
    Button: {
        cursor: 'pointer',
        top: '306px',
        left: '1378px',
        width: '105px',
        height: '57px',
        padding: '0px 8px',
        border: '1px solid #61aacf',
        boxSizing: 'border-box',
        borderRadius: '6px',
        backgroundColor: '#61aacf',
        color: '#080a0b',
        fontSize: '18px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        lineHeight: '23px',
        outline: 'none',
        position: 'absolute'
    },
};

const defaultProps = {
    label: 'Add',
};

const Button = ({ label, onClick }) => {
    return (
        <button style={styles.Button} onClick={onClick}>
            {label ?? defaultProps.label}
        </button>
    );
};


export default Button;