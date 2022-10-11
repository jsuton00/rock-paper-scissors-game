import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './components/Game';
import Header from './components/Header';
import Play from './components/Play';

const App = () => {
	const [myChoice, setMyChoice] = useState('');
	const [score, setScore] = useState(0);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Play setMyChoice={setMyChoice} />,
		},
		{
			path: 'game',
			element: <Game myChoice={myChoice} score={score} setScore={setScore} />,
		},
	]);
	return (
		<>
			<div className="app container">
				<Header score={score} />
				<div className="main container">
					<RouterProvider router={router} />
				</div>
			</div>
		</>
	);
};

export default App;
