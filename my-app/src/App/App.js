import { useState } from 'react';
import { TaskList, Form } from './Components';
import { useRequestTasks } from './Hooks/useRequestTask';

export const App = () => {
	const [taskValue, setTaskValue] = useState('');
	const [editableTask, setEditableTask] = useState(null);

	const {
		tasks,
		refresh,
		isLoading,
		isSort,
		setIsSort,
		getRequestTasks,
		postRequestTasks,
		updateRequestTasks,
		deleteRequestTasks,
	} = useRequestTasks();

	const onChange = ({ target }) => {
		setTaskValue(target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		postRequestTasks({
			title: taskValue,
		});
		setTaskValue('');
	};

	return (
		<>
			<Form
				onChange={onChange}
				onSubmit={onSubmit}
				value={taskValue}
				editableTask={editableTask}
			/>
			<TaskList
				tasks={tasks}
				isLoading={isLoading}
				updateRequestTasks={updateRequestTasks}
				deleteRequestTasks={deleteRequestTasks}
				getRequestTasks={getRequestTasks}
				editableTask={editableTask}
				setEditableTask={setEditableTask}
				setIsSort={setIsSort}
				refresh={refresh}
				isSort={isSort}
			/>
		</>
	);
};
