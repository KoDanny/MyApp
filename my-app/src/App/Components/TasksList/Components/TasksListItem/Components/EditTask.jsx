import { useState } from 'react';
import { Button, Input } from '../../../../Components';
import styles from './Styles.module.css';
import { readTask, updateTask } from '../../../../../API';

export const EditTask = ({ title, id, setCurrentEditTaskId, setPropertiesState }) => {
	const [value, setValue] = useState(title);

	const onSaveButtonClick = async () => {
		await updateTask({ id, title: value }).then(() => setCurrentEditTaskId(null));
		await readTask().then((tasks) => setPropertiesState({ tasks }));
	};

	return (
		<div className={styles.container}>
			<Input
				type="text"
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
			<div className={styles.buttonContainer}>
				<Button onClick={onSaveButtonClick}>✔</Button>
			</div>
		</div>
	);
};
