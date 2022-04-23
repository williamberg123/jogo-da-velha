import React from 'react';

import PropTypes from 'prop-types';

import ScoreInfoItem from '../ScoreInfoItem/ScoreInfoItem';

import './style.css';

export default function ScoreInfoBar({ whoArePlaying, ballInfo, crossInfo }){
    const htmlRendering = [
        <ScoreInfoItem whoArePlaying={whoArePlaying === 'ball' && ('whoArePlaying')} key="ball-info" score={ballInfo.score} imageRoot={ballInfo.imageRoot} />,
        <ScoreInfoItem whoArePlaying={whoArePlaying === 'cross' && ('whoArePlaying')} key="cross-info" score={crossInfo.score} imageRoot={crossInfo.imageRoot} />
    ];

    return (
        <div className="Bar">
            {htmlRendering}
        </div>
    );
}

ScoreInfoBar.propTypes = {
    whoArePlaying: PropTypes.string.isRequired,
    ballInfo: PropTypes.instanceOf(Object).isRequired,
    crossInfo: PropTypes.instanceOf(Object).isRequired
};
