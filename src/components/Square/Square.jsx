import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default function Square({ funcHandleClick, index }) {
    return (
        <div data-testid="Square" onClick={funcHandleClick} className={`Square Square${index}`}>
        </div>
    );
}

Square.propTypes = {
    funcHandleClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};
