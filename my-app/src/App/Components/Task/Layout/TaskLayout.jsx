import styles from './TaskLayout.module.css';

export const TaskLayout = ({
	id,
	title,
	setEditableTask,
	setValue,
	deleteRequestTasks,
	editableTask,
}) => {
	const disabled = editableTask ? styles.disabled : null;
	return (
		<div className={styles.taskContainer} id={id}>
			<p className={styles.task}>{title}</p>
			<div className={styles.buttonContainer}>
				<button
					disabled={!!editableTask}
					className={styles.button + ' ' + disabled}
					onClick={() => {
						setEditableTask(id);
						setValue(title);
					}}
				>
					Редактировать
				</button>
				<button
					disabled={!!editableTask}
					className={styles.button + ' ' + disabled}
					onClick={() => deleteRequestTasks(id)}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};
