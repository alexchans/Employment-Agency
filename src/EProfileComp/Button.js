import React from 'react';

const styles = {
    Button: {
        cursor: 'pointer',
        top: '657px',
        left: '481px',
        width: '192px',
        height: '47px',
        padding: '0px 8px',
        border: '1px solid #0000ff',
        boxSizing: 'border-box',
        borderRadius: '8px',
        backgroundColor: '#0000ff',
        color: '#ffffff',
        fontSize: '18px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        lineHeight: '23px',
        outline: 'none',
        position: 'absolute',

    },
};

const defaultProps = {
    label: 'Edit',
};

const Button = (props) => {
    return (
        <button style={styles.Button}>
            {props.label ?? defaultProps.label}
        </button>
    );
};

export default Button;