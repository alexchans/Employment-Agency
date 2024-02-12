import React from 'react';

const styles = {
    ImageContainer: {
        top: '27px',
        left: '7px',
        width: '140px',
        height: '80px',
        borderRadius: '8px',
        backgroundImage: 'url(./image.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft: '20px',
        marginBottom: '10px'
    },
};

const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/dc986f59-0fbd-472f-9ec5-5c61828c095e.png',
}

const Image = (props) => {
    return (
        <div style={{
            ...styles.ImageContainer,
            backgroundImage: `url(${props.image ?? defaultProps.image})`,
        }} />
    );
};

export default Image;