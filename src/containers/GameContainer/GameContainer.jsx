import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

export default function GameContainer({ htmlRendering }) {
    return (
        <div className="GameContainer">
            {htmlRendering}
        </div>
    );
}

GameContainer.propTypes = {
    htmlRendering: PropTypes.instanceOf(Array).isRequired
};
