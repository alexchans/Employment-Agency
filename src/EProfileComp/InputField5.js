import React from 'react';

const styles = {
    Input: {
        top: '455px',
        left: '440px',
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
    text: '204 N Grand Street',
};

const InputField = (props) => {
    return (
        <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
    );
};

export default InputField;