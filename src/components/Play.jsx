import React from 'react';
import { Link } from 'react-router-dom';
import paper from '../assets/icons/icon-paper.svg';
import rock from '../assets/icons/icon-rock.svg';
import scissors from '../assets/icons/icon-scissors.svg';
import GameIcon from './GameIcon';

const Play = (props) => {
	const { setMyChoice } = props;

	const setChoice = (e) => {
		setMyChoice(e.target.dataset.id);
	};
	return (
		<div className="play">
			<Link to="/game">
				<GameIcon iconType="paper" setChoice={setChoice} />
			</Link>
			<Link to="/game">
				<GameIcon iconType="scissors" setChoice={setChoice} />
			</Link>
			<Link to="/game">
				<GameIcon iconType="rock" setChoice={setChoice} />
			</Link>
		</div>
	);
};

export default Play;
