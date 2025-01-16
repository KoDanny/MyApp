import styles from './TaskLayout.module.css';

export const TaskLayout = ({ id, title, index }) => {
	return (
		<div className={styles.taskContainer} id={id}>
			<p className={styles.taskHeader}>Задача {index + 1}</p>
			<p className={styles.taskBody}>{title}</p>
		</div>
	);
};
