import React from 'react';
import paper from '../assets/icons/icon-paper.svg';
import rock from '../assets/icons/icon-rock.svg';
import scissors from '../assets/icons/icon-scissors.svg';

const GameIcon = (props) => {
	const { iconType, setChoice } = props;

	const renderIcons = () => {
		if (iconType === 'paper') {
			return (
				<img src={paper} alt={`${iconType} icon`} className="icon-image" />
			);
		}
		if (iconType === 'rock') {
			return <img src={rock} alt={`${iconType} icon`} className="icon-image" />;
		}
		if (iconType === 'scissors') {
			return (
				<img src={scissors} alt={`${iconType} icon`} className="icon-image" />
			);
		}
	};
	return (
		<div
			data-id={iconType}
			onClick={setChoice}
			className={`icon icon-${iconType}`}
		>
			{renderIcons()}
		</div>
	);
};

export default GameIcon;
