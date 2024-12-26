import styles from './StartButton.module.css';

export const StartButton = ({ onClick }) => (
	<button className={styles.btn} onClick={onClick}>
		<span className={styles.text}>Начать заново</span>
	</button>
);
