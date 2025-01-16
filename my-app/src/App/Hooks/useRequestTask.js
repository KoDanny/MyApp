import { useEffect, useState } from 'react';
import { TASKS_URL } from '../Constants';

export const useRequestTask = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoadingTasks, setIsLoadingTasks] = useState(false);

	const getTasks = async () => {
		try {
			setIsLoadingTasks(true);
			const response = await fetch(TASKS_URL);
			const loadedData = await response.json();
			setTasks(loadedData);
		} catch (error) {
			throw new Error(`Что-то пошло не так: ${error}`);
		} finally {
			setIsLoadingTasks(false);
		}
	};

	useEffect(() => {
		getTasks();
		return () => setTasks([]);
	}, []);

	return {
		tasks,
		isLoadingTasks,
		setTasks,
	};
};
