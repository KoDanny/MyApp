import { useEffect } from 'react';
import { useAppState } from '../../Hooks';
import styles from './Information.module.css';

export const Information = () => {
	const { state, update } = useAppState();

	const { currentPlayer, isGameEnded } = state;

	useEffect(() => update(), []);

	let message = isGameEnded ? 'игра окончена' : `Ходит: ${currentPlayer}`;

	return (
		<div className={styles.container}>
			<p className={styles.text}>{message}</p>
			{isGameEnded && <button>Играть снова</button>}
		</div>
	);
};
