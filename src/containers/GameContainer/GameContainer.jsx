import React from 'react';

import PropTypes from 'prop-types';

import Square from '../../components/Square/Square';

import './style.css';

export default function GameContainer({ handleClick }) {
    const htmlRendering = Array(9).fill().map((item, index) => <Square index={index} funcHandleClick={(e) => handleClick(e, index)} key={`square${index}`} />);

    return (
        <div className="GameContainer">
            {htmlRendering}
        </div>
    );
}

GameContainer.propTypes = {
    handleClick: PropTypes.func.isRequired
};
