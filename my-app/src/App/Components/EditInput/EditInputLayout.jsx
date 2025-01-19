import styles from './EditInputLayout.module.css';

export const EditInputLayout = ({ value, setValue, saveTask, id }) => {
	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				autoFocus
				value={value}
				onChange={({ target }) => {
					setValue(target.value);
				}}
			></input>

			<button className={styles.button} onClick={() => saveTask(id)}>
				Сохранить
			</button>
		</div>
	);
};
