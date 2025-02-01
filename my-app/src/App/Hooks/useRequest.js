import { useCallback, useState } from 'react';
import { TASKS_URL } from '../constants';

export const useRequest = () => {
	const [isLoading, setIsLoading] = useState(false);

	const getRequest = useCallback(async ({ method, sort, id, ...taskData } = {}) => {
		const options = {
			method,
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body:
				method === 'POST' || method === 'PATCH' ? JSON.stringify(taskData) : null,
		};

		const url = id !== undefined ? `${TASKS_URL}/${id}` : TASKS_URL;
		const params = sort ? `?_sort=title` : '';

		try {
			const response = await fetch(`${url}${params}`, { ...options });
			const data = await response.json();
			return data;
		} catch (e) {
			console.log(`REQUEST ERROR: ${e}`);
		}
	}, []);

	const createTaskRequest = useCallback(
		({ id, ...taskData } = {}) =>
			getRequest({ method: 'POST', sort: false, id, ...taskData }),
		[getRequest],
	);
	const readTaskRequest = useCallback(
		({ id, ...taskData } = {}) =>
			getRequest({ method: 'GET', sort: false, id, ...taskData }),
		[getRequest],
	);
	const updateTaskRequest = useCallback(
		({ id, ...taskData } = {}) =>
			getRequest({ method: 'PATCH', sort: false, id, ...taskData }),
		[getRequest],
	);
	const deleteTaskRequest = useCallback(
		({ id, ...taskData } = {}) =>
			getRequest({ method: 'DELETE', sort: false, id, ...taskData }),
		[getRequest],
	);
	const sortTaskRequest = useCallback(
		({ id, ...taskData } = {}) =>
			getRequest({ method: 'GET', sort: true, id, ...taskData }),
		[getRequest],
	);

	return {
		createTaskRequest,
		readTaskRequest,
		updateTaskRequest,
		deleteTaskRequest,
		sortTaskRequest,
		setIsLoading,
	};
};
