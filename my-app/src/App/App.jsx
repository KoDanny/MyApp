import { Information } from './Information/Information.jsx';
import { useState } from 'react';
import { Field } from './Field/Field.jsx';
import { StartButton } from './StartButton/StartButton.jsx';
import styles from './App.module.css';

export const App = () => {
	const initState = {
		currentPlayer: 'X',
		isGameEnded: false,
		isDraw: false,
		field: ['', '', '', '', '', '', '', '', ''],
	};

	const [state, setState] = useState(initState);

	const hasButton = state.isGameEnded || state.isDraw;
	return (
		<div className={styles.appContainer}>
			<Information {...state} />
			<Field setState={setState} {...state} />
			{hasButton && <StartButton onClick={() => setState(initState)} />}
		</div>
	);
};
