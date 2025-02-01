import { Input } from '../../Input/Input';
import { NavLink } from 'react-router-dom';
import styles from './TasksListLayout.module.css';

export const TasksListLayout = ({
	state: { searchedTasks },
	handlers: { onTaskCompletedChange },
}) => {
	const tasksList = searchedTasks.map(({ id, completed, title }) => {
		const taskContainerStyles = completed
			? styles.taskContainer + ' ' + styles.completed
			: styles.taskContainer;

		return (
			<div className={taskContainerStyles} key={id} id={id}>
				<p className={styles.taskText}>
					<NavLink className={styles.link} to={`tasks/${id}`}>
						{title}
					</NavLink>
				</p>
				<Input
					type="checkbox"
					checked={completed}
					title="Отметить выполненной"
					onChange={({ target }) => onTaskCompletedChange(id, { target })}
				/>
			</div>
		);
	});
	return <div className={styles.tasksListContainer}>{tasksList}</div>;
};
