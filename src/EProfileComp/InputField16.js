import React from 'react';

const styles = {
    Input: {
        top: '11px',
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

const defaultProps = {
    text: 'Start date',
};

// Using React.forwardRef to forward the ref to the DOM input element
const InputField = React.forwardRef((props, ref) => {
    // Destructure the props to isolate `text` and spread the rest
    const { text, ...rest } = props;
    return (
        <input
            ref={ref}
            style={styles.Input}
            placeholder={props.text ?? defaultProps.text}
            {...rest} // Spread the rest of the props here
        />
    );
});


export default InputField;
