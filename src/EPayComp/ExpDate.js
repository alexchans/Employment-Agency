import React from 'react';

const styles = {
    Dropdown: {
        cursor: 'pointer',
        top: '456px',
        left: '216px',
        width: '268px',
        height: '52px',
        padding: '0px 8px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        borderRadius: '6px',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        lineHeight: '16px',
        outline: 'none',
    },
};

const defaultProps = {
    label: '   MM/YY',
    values: [
        'Option 1',
        'Option 2',
        'Option 3',
    ],
};

const Dropdown = (props) => {
    return (
        <select style={styles.Dropdown} defaultValue="">
            <option value="" disabled hidden>{props.label ?? defaultProps.label}</option>
            {(props.values ?? defaultProps.values).map((value) => (
                <option value={value} key={value}>{value}</option>
            ))}
        </select>
    );
};

export default Dropdown;