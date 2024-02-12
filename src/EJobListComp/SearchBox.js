import React from 'react';

const styles = {
    Input: {
        top: '75px',
        left: '1053px',
        width: '400px',
        height: '38px',
        padding: '0px 8px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        borderRadius: '12px',
        backgroundColor: '#282828',
        color: '#ffffff',
        fontSize: '20px',
        fontFamily: 'Poppins',
        lineHeight: '26px',
        outline: 'none',
        position: 'absolute'
    },
};

const defaultProps = {
    text: 'Search by Job ID',
};

const InputField = (props) => {
    return (
        <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
    );
};

export default InputField;