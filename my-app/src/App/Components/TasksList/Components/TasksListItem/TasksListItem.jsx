import { useContext } from 'react';
import { AppContext } from '../../../../Context/context';
import { EditTask } from './Components/EditTask';
import { Task } from './Components/Task';
import { useState } from 'react';

export const TasksListItem = ({ id, title, completed }) => {
	const { setPropertiesState } = useContext(AppContext);
	const [currentEditTaskId, setCurrentEditTaskId] = useState(null);

	return id === currentEditTaskId ? (
		<EditTask {...{ title, id, setCurrentEditTaskId, setPropertiesState }} />
	) : (
		<Task
			{...{
				setPropertiesState,
				title,
				completed,
				id,
				setCurrentEditTaskId,
			}}
		/>
	);
};
