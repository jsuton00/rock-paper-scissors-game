import React from 'react';

const Header = (props) => {
	const { score } = props;
	return (
		<div className="header">
			<div className="header-row row">
				<div className="header-row-section app-title">
					<h1>
						<span>Rock</span>
						<span>Paper</span>
						<span>Scissors</span>
					</h1>
				</div>
				<div className="header-row-section scoreboard">
					<div className="score">
						<h1 className="score-title">Score</h1>
						<p className="score-text">{score > 0 ? score : 0}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
