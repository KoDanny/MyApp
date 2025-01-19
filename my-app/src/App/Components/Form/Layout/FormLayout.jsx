import styles from './FormLayout.module.css';

export const FormLayout = ({ onSubmit, onChange, value, editableTask }) => {
	const disabled = editableTask ? styles.disabled : null;
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<input
				disabled={!!editableTask}
				className={styles.input + ' ' + disabled}
				type="text"
				value={value}
				placeholder="Введите текст задачи"
				name="task"
				onChange={onChange}
			></input>
			<button
				disabled={!!editableTask}
				className={styles.button + ' ' + disabled}
				type="submit"
			>
				Добавить
			</button>
		</form>
	);
};
