import { useEffect } from 'react';
import { getSearchedTasks, setTaskInTasks } from '../../utils';
import { TasksListLayout } from './Layout/TasksListLayout';
import { useRequest } from '../../Hooks';

export const TasksList = ({
	state,
	state: { tasks, inputSearchValue, isSortingEnable },
	setPropertiesState,
}) => {
	console.log('Render TasksList');
	const { readTaskRequest, sortTaskRequest, updateTaskRequest } = useRequest();

	useEffect(() => {
		if (inputSearchValue === '') {
			setPropertiesState({ searchedTasks: tasks });
		} else {
			const searchedTasks = getSearchedTasks(tasks, inputSearchValue);
			setPropertiesState({ searchedTasks });
		}

		if (isSortingEnable) {
			sortTaskRequest().then((tasks) => setPropertiesState({ tasks }));
		} else {
			readTaskRequest().then((tasks) => setPropertiesState({ tasks }));
		}
	}, [
		inputSearchValue,
		isSortingEnable,
		tasks,
		setPropertiesState,
		readTaskRequest,
		sortTaskRequest,
	]);

	const handlers = {
		onTaskCompletedChange: (id, { target }) => {
			const completed = target.checked;
			updateTaskRequest({ id, completed })
				.then((newTaskData) => setTaskInTasks(tasks, newTaskData))
				.then((newTasks) => setPropertiesState({ tasks: newTasks }));
		},
	};
	return <TasksListLayout {...{ state, handlers }} />;
};
