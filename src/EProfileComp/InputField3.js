import React from 'react';

const styles = {
    Input: {
        top: '198px',
        left: '607px',
        width: '348px',
        height: '58px',
        padding: '0px 8px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        borderRadius: '6px',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Poppins',
        lineHeight: '19px',
        outline: 'none',
        position: 'absolute',
    },
};

const defaultProps = {
    text: 'Last Name',
};

const InputField = (props) => {
    return (
        <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
    );
};

export default InputField;