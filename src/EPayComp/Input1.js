import React from 'react';

const styles = {
    Input: {
        top: '202px',
        left: '575px',
        width: '560px',
        height: '52px',
        padding: '0px 8px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        borderRadius: '12px',
        backgroundColor: '#282828',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Poppins',
        lineHeight: '18px',
        outline: 'none',
        position: 'absolute'
    },
};

/*const defaultProps = {
    text: '    Your Name',
};*/

const InputField = ({ text = '    Your Name', onChange, value, name }) => {
    return (
        <input
            style={styles.Input}
            placeholder={text}
            value={value} // Controlled component
            onChange={onChange} // Handle changes
            name={name} // Identify the field
        />
    );
};

export default InputField;