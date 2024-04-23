import React from 'react';

const styles = {
    Input: {
        top: '229px',
        left: '620px',
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
        marginTop: '-30px',
        marginLeft: '-13px',
    },
};

/*const defaultProps = {
    text: 'Position ID',
};*/

const InputField = ({ text = 'Position ID', onChange, value, name }) => {
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