// import { TASKS_URL } from '../constants';

// const getRequest = async (method, { id, ...taskData } = {}) => {
// 	const URL = id !== undefined ? TASKS_URL + `/${id}` : TASKS_URL;

// 	const options = {
// 		method,
// 	};

// 	if (method !== 'GET' && method !== 'DELETE') {
// 		options.headers = {
// 			'Content-type': 'application/json;charset=utf-8',
// 		};
// 		options.body = JSON.stringify({ ...taskData });
// 	}

// 	const response = await fetch(URL, options);

// 	return await response.json();
// };

// export const createTask = (taskData) =>
// 	getRequest('POST', { completed: false, ...taskData });

// export const readTask = (id) => getRequest('GET', { id });

// export const updateTask = (id, taskData) => getRequest('PATCH', { id, ...taskData });

// export const deleteTask = (taskId) => getRequest('DELETE', { id: taskId });

// export const sortTask = async (isSortingEnable) => {
// 	const params = isSortingEnable ? `?_sort=title` : '';

// 	return await fetch(`${TASKS_URL}${params}`).then((response) => response.json());
// };
