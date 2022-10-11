import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GameIcon from './GameIcon';

const Game = (props) => {
	const { score, myChoice, setScore } = props;
	const [house, setHouse] = useState('');
	const [playerWin, setPlayerWin] = useState('');
	const [counter, setCounter] = useState(3);
	const history = useNavigate();

	const onPlayAgainClick = () => {
		return history('/');
	};

	const newHousePick = () => {
		const choices = ['rock', 'paper', 'scissors'];
		setHouse(choices[Math.floor(Math.random() * 3)]);
	};

	useEffect(() => {
		newHousePick();
	}, []);

	const Result = () => {
		if (myChoice === 'rock' && house === 'scissors') {
			setPlayerWin('win');
			setScore(score + 1);
		} else if (myChoice === 'rock' && house === 'paper') {
			setPlayerWin('lose');
			setScore(score - 1);
		} else if (myChoice === 'scissors' && house === 'paper') {
			setPlayerWin('win');
			setScore(score + 1);
		} else if (myChoice === 'scissors' && house === 'rock') {
			setPlayerWin('lose');
			setScore(score - 1);
		} else if (myChoice === 'paper' && house === 'rock') {
			setPlayerWin('win');
			setScore(score + 1);
		} else if (myChoice === 'paper' && house === 'scissors') {
			setPlayerWin('lose');
			setScore(score - 1);
		} else {
			setPlayerWin('draw');
		}
	};

	useEffect(() => {
		Result();
	}, [house]);

	return (
		<div className="game container">
			<div className="game-section game-you">
				<span className="game-you-text">You picked</span>
				<GameIcon iconType={myChoice} />
			</div>
			<div className="game-section play-again-game">
				<h1 className="player-win-text">{playerWin}</h1>
				<button
					type="button"
					className="play-again-game-button"
					onClick={onPlayAgainClick}
				>
					Play Again
				</button>
			</div>
			<div className="game-section game-house">
				<span className="game-house-text">The house picked</span>
				<GameIcon iconType={house} />
			</div>
		</div>
	);
};

export default Game;
