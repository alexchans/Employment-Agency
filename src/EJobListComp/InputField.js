import React from 'react';
// Modify InputField to accept onChange prop
const styles = {
    Input: {
        top: '-225px',
        left: '1005px',
        width: '200px',
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

const InputField = ({ text, onChange, placeholder }) => {
    return (
        <input
            style={styles.Input}
            value={text}
            onChange={onChange}
            placeholder={placeholder ?? 'Search by Job ID'}
        />
    );
};
export default InputField;