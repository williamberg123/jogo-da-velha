import React from 'react';

import PropTypes from 'prop-types';

export default function Image({ imageRoot }){
    return (
        <img src={imageRoot} alt="img" />
    );
}

Image.propTypes = {
    imageRoot: PropTypes.string.isRequired
};
