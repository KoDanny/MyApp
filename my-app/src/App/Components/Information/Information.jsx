import { useEffect } from 'react';
import { useAppState } from '../../Hooks';
import styles from './Information.module.css';

export const Information = () => {
	const {
		state: { currentPlayer, isGameEnded, isDraw },
		update,
	} = useAppState();

	useEffect(() => update(), []);

	const resultGame = isDraw ? 'Ничья' : `Победил игрок ${currentPlayer}`;

	const message = isGameEnded ? resultGame : `Сейчас ходит: ${currentPlayer}`;

	return (
		<div className={styles.container}>
			{isGameEnded && <p className={styles.text}>Игра окончена!</p>}
			<p className={styles.text}>{message}</p>
		</div>
	);
};
