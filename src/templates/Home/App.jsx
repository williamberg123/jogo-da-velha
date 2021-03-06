import React, { useState, useEffect } from 'react';

import GameContainer from '../../containers/GameContainer/GameContainer';

import crossImage from '../../images/cross.png';
import circleImage from '../../images/circle.png';

import checkSequence from '../../utils/checkSequence';
import ScoreInfoBar from '../../components/ScoreInfoBar/ScoreInfoBar';

import './App.css';

export default function App() {
	const [ whoArePlaying, setWhoArePlaying ] = useState('ball');
    const [ clickedBalls, setClickedBalls ] = useState([]);
    const [ clickedCrosses, setClickedCrosses ] = useState([]);
	const [ ballScore, setBallScore ] = useState(0);
	const [ crossScore, setCrossScore ] = useState(0);

	const squareHasClicked = (index) => {
		return (clickedBalls.includes(index) || clickedCrosses.includes(index));
	};

    const handleClick = (e, index) => {
		if (squareHasClicked(index)) return;

        if (whoArePlaying === 'ball'){
            const newClickedBalls = [...clickedBalls, index];
            setWhoArePlaying('cross');
            setClickedBalls(newClickedBalls);
            e.target.innerHTML = `<img src="${circleImage}" />`;
        } else {
            const newClickedCrosses = [...clickedCrosses, index];
            setWhoArePlaying('ball');
            setClickedCrosses(newClickedCrosses);
            e.target.innerHTML = `<img src="${crossImage}" />`;
        }
    };

	const resetGame = () => {
		setClickedBalls([]);
		setClickedCrosses([]);

		const elementsArray = document.querySelectorAll('.Square');

		elementsArray.forEach((element) => {
			element.innerHTML = '';
		});
	};

	const checkWinner = (isBallWinner, isCrossWinner) => {
		const numberOfMoves = clickedBalls.length + clickedCrosses.length;

		if (isBallWinner){
			alert('Jogador bola ganhou desta vez');
			setBallScore(ballScore + 1);
			resetGame();
		} else if (isCrossWinner){
			alert('Jogador x ganhou desta vez');
			setCrossScore(crossScore + 1);
			resetGame();
		}

		if (numberOfMoves === 9){
			alert('Fim de jogo');
			resetGame();
		}
	};

	useEffect(() => {
        const isBallWinner = checkSequence(clickedBalls);
        const isCrossWinner = checkSequence(clickedCrosses);

		setTimeout(() => {
			checkWinner(isBallWinner, isCrossWinner);
		}, 100);
    }, [clickedBalls, clickedCrosses]);

	return (
		<div className="App">
			<ScoreInfoBar
				whoArePlaying={whoArePlaying}
				ballInfo={{
					score: ballScore,
					imageRoot: circleImage
				}}
				crossInfo={{
					score: crossScore,
					imageRoot: crossImage
				}}
			/>
			<GameContainer handleClick={handleClick} />
		</div>
	);
}
