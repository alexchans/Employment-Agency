import React from 'react';

const styles = {
    Button: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '286px',
        left: '1326px',
        width: '24px',
        height: '24px',
        border: '1px solid #61aacf',
        boxSizing: 'border-box',
        borderRadius: '100px',
        color: '#080a0b',
        backgroundColor: '#61aacf',
        outline: 'none',
        marginLeft: '1190px',
        marginTop: '120px'

    },
    Icon: {
        color: '#080a0b',
        fill: '#080a0b',
        width: '14px',
        height: '14px',
        fontSize: '14px',
    },
};

const IconComponent = () => (
    <svg style={styles.Icon}  viewBox="0 0 448 512">
        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z">
        </path>
    </svg>
);

const defaultProps = {
    IconComponent,
};

const IconButton = (props) => {
    return (
        <button style={styles.Button}>
            {
                props.IconComponent
                    ? <props.IconComponent style={styles.Icon} />
                    : <defaultProps.IconComponent />
            }
        </button>
    );
};

export default IconButton;