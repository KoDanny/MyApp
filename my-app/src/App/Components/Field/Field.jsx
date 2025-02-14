import styles from './Field.module.css';
import { useAppState } from '../../Hooks';
import { getWinPattern, updateField } from '../../utils';
import { WIN_PATTERNS } from '../../Constants';
import { useEffect } from 'react';
import * as action from '../../actions';
import { Cells } from './Components/Cells/Cells';

export const Field = () => {
	const { state, dispatch, update } = useAppState();
	const { field, isGameEnded, currentPlayer } = state;

	useEffect(() => update(), []);

	const onClick = ({ target: { id, textContent } }) => {
		if (!id || textContent || isGameEnded) return;

		const updatedField = updateField(field, id, currentPlayer);
		const pattern = getWinPattern(updatedField, WIN_PATTERNS);

		if (pattern) {
			dispatch(action.setGameEnded(true));
			dispatch(action.setWinPattern(pattern));
		} else if (!updatedField.includes('')) {
			dispatch(action.setDraw(true));
			dispatch(action.setGameEnded(true));
		} else {
			const player = currentPlayer === '✖' ? '⭘' : '✖';
			dispatch(action.setCurrentPlayer(player));
		}
		dispatch(action.setField(updatedField));
	};

	return (
		<div onClick={onClick} className={styles.container}>
			<Cells state={state} />
		</div>
	);
};
