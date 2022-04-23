import React from 'react';

import PropTypes from 'prop-types';

import Image from '../Image/Image';

import './style.css';

export default function ScoreInfoItem({ whoArePlaying, score, imageRoot }){
    return (
        <div className={`Bar-group ${!!whoArePlaying && (whoArePlaying)}`}>
            <p>Sua vez</p>
            <Image imageRoot={imageRoot} />
            <div className="Bar-score">{score}</div>
        </div>
    );
}

ScoreInfoItem.propTypes = {
    whoArePlaying: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    imageRoot: PropTypes.string.isRequired
};
