import React from 'react';

const styles = {
    Input: {
        top: '335px',
        left: '1010px',
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
    text: 'Keywords / Key Phrases',
};*/


const InputField = ({text, value, onChange, name}) => {
    return (
        <input
            /*type="text"*/ // Ensure you're specifying the correct type
            style={styles.Input}
            placeholder={text}
            value={value}
            onChange={onChange} // Ensure onChange is correctly passed and used
            /*placeholder={placeholder}*/
            name={name}
        />
    );
};


/*
const InputField = ({ placeholder, value, onChange, text, name }) => {
    return (
        <input
            type="text" // Ensure you're specifying the correct type
            style={styles.Input}
            value={text}
            onChange={onChange} // Ensure onChange is correctly passed and used
            placeholder={placeholder}
            name={name} // Identify the field
        />
    );
};
*/

/*const InputField = ({ text, onChange, placeholder }) => {
    return (
        <input
            style={styles.Input}
            value={text}
            onChange={onChange}
            placeholder={placeholder  ?? defaultProps.text }
        />
    );
};*/


export default InputField;