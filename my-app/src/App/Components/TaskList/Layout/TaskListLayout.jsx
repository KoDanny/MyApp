import { Loader } from '../../Loader/Loader';
import { TaskLayout } from '../../Task/Layout/TaskLayout';
import styles from './TaskListLayout.module.css';

export const TaskListLayout = ({ tasks, isLoading }) => {
	const taskList = tasks.map((task, index) => (
		<TaskLayout key={task.id} {...task} index={index} />
	));

	return (
		<div className={styles.taskListContainer}>
			<h1 className={styles.taskListHeader}>Список текущих задач:</h1>
			{isLoading ? <Loader /> : taskList}
		</div>
	);
};
