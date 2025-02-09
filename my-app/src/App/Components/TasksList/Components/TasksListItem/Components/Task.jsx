import { Button, Input } from '../../../../Components';
import styles from './Styles.module.css';
import { updateTask } from '../../../../../API';
import { deleteTask, readTask } from '../../../../../API';

export const Task = ({
	title,
	setPropertiesState,
	completed,
	id,
	setCurrentEditTaskId,
}) => {
	const onCompletedCheckboxChange = async ({ target }) => {
		await updateTask({ id, completed: target.checked });
		await readTask().then((tasks) => setPropertiesState({ tasks }));
	};

	const onDeleteButtonClick = async () => {
		await deleteTask({ id });
		await readTask().then((tasks) => setPropertiesState({ tasks }));
	};

	const onEditButtonClick = () => setCurrentEditTaskId(id);

	return (
		<div className={styles.container}>
			<p className={styles.text}>{title}</p>
			<div className={styles.buttonContainer}>
				<Input
					type="checkbox"
					checked={completed}
					onChange={onCompletedCheckboxChange}
				/>
				<Button onClick={onDeleteButtonClick}>✖</Button>
				<Button onClick={onEditButtonClick}>✎</Button>
			</div>
		</div>
	);
};
