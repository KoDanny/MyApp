import styles from './Field.module.css';
import { useAppState } from '../../Hooks';
import { getWinPattern, updateField } from '../../utils';
import { WIN_PATTERNS } from '../../Constants';
import { useEffect } from 'react';

export const Field = () => {
	const { state, dispatch, update } = useAppState();
	const { field, isGameEnded, currentPlayer } = state;

	useEffect(() => update(), []);

	const onClick = ({ target: { id, textContent } }) => {
		if (!id || textContent || isGameEnded) return;
		const pattern = getWinPattern(field, WIN_PATTERNS);

		if (pattern) {
			dispatch({ type: 'SET_GAME_ENDED', payload: true });
		} else if (!field.includes('')) {
			dispatch({ type: 'SET_DRAW', payload: true });
		} else {
			dispatch({
				type: 'SET_FIELD',
				payload: updateField(field, id, currentPlayer),
			});

			dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: currentPlayer === 'X' ? 'O' : 'X',
			});
		}
	};

	const cells = field.map((cell, index) => (
		<div className={styles.cell} id={index} key={index}>
			{cell}
		</div>
	));

	return (
		<div onClick={onClick} className={styles.container}>
			{cells}
		</div>
	);
};
