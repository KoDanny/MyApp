import { useContext, useEffect, useState } from 'react';
import { Container } from '../Components/Container/Container';
import { TasksListItem } from './Components/TasksListItem/TasksListItem';
import { AppContext } from '../../Context/context';
import { readTask } from '../../API';
import { sortTask } from '../../utils/sortTasks';

export const TasksList = () => {
	const {
		state: { tasks, isSortingEnable, searchValue, refreshFlag },
		setPropertiesState,
	} = useContext(AppContext);

	const [taskList, setTaskList] = useState(tasks);

	const callback = async () => {
		const tasksData = await readTask();
		const sortedTasks = sortTask(tasksData, isSortingEnable);
		const list = [...sortedTasks].filter(({ title }) => title.includes(searchValue));
		setTaskList(list);
		setPropertiesState({ refreshFlag: !refreshFlag });
	};

	useEffect(() => {
		callback();
	}, [searchValue, isSortingEnable, tasks]);

	const children = taskList.map(({ id, title, completed }) => {
		return <TasksListItem key={id} {...{ id, title, completed }} />;
	});

	return <Container>{children}</Container>;
};
