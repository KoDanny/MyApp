import { Loader } from '../../Loader/Loader';
import styles from './TaskListLayout.module.css';

export const TaskListLayout = ({ children, isLoading, setIsSort }) => {
	return (
		<div className={styles.taskListContainer}>
			{children.length >= 1 && (
				<h1 className={styles.taskListHeader}>Список текущих задач:</h1>
			)}
			{children.length > 1 && (
				<div className={styles.checkBoxContainer}>
					<label className={styles.label}>
						Сортировать в алфавитном порядке
					</label>
					<input
						className={styles.input}
						type="checkbox"
						onClick={({ target: { checked } }) => {
							setIsSort(checked);
						}}
					></input>
				</div>
			)}
			<div className={styles.taskList}>{isLoading ? <Loader /> : children}</div>
		</div>
	);
};
