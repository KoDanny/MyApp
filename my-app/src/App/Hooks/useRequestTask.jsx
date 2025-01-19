import { useState } from 'react';
import { TASKS_URL } from '../Constants';

export const useRequestTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSort, setIsSort] = useState(false);

	const getRequestTasks = () => {
		setIsLoading(true);

		const params = isSort ? '?_sort=title' : '';
		console.log(`${TASKS_URL}${params}`);

		fetch(`${TASKS_URL}${params}`)
			.then((response) => response.json())
			.then((loadedData) => setTasks(loadedData))
			.finally(() => setIsLoading(false));
	};

	const postRequestTasks = (taskData = {}) => {
		fetch(TASKS_URL, {
			method: 'POST',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ completed: false, ...taskData }),
		}).finally(() => setRefresh(!refresh));
	};

	const updateRequestTasks = (id, taskData = {}) => {
		setIsLoading(true);
		fetch(`${TASKS_URL}/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ completed: false, ...taskData }),
		}).finally(() => {
			setRefresh(!refresh);
			setIsLoading(false);
		});
	};

	const deleteRequestTasks = (id) => {
		fetch(`${TASKS_URL}/${id}`, {
			method: 'DELETE',
		}).finally(() => setRefresh(!refresh));
	};

	return {
		tasks,
		isLoading,
		refresh,
		isSort,
		getRequestTasks,
		postRequestTasks,
		updateRequestTasks,
		deleteRequestTasks,
		setIsSort,
	};
};
