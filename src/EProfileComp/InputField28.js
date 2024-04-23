import React from 'react';

const styles = {
    Input: {
        top: '455px',
        left: '839px',
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

/*const defaultProps = {
    text: 'New Password',
};*/

const InputField = ({ text = 'New Password', onChange, value, name, type }) => {
    return (
        <input
            style={styles.Input}
            placeholder={text}
            value={value} // Controlled component
            onChange={onChange} // Handle changes
            name={name} // Identify the field
            type={type} // Use the `type` prop here
        />
    );
};

export default InputField;