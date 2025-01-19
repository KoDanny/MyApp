import { useState, useEffect } from 'react';
import { TaskListLayout } from './Layout/TaskListLayout';
import { EditInputLayout } from '../EditInput/EditInputLayout';
import { TaskLayout } from '../Task/Layout/TaskLayout';

export const TaskList = ({
	tasks,
	isLoading,
	updateRequestTasks,
	deleteRequestTasks,
	getRequestTasks,
	setEditableTask,
	editableTask,
	setIsSort,
	refresh,
	isSort,
}) => {
	const [value, setValue] = useState(null);

	useEffect(
		() => {
			getRequestTasks();
		}, // eslint-disable-next-line react-hooks/exhaustive-deps
		[refresh, isSort],
	);

	const saveTask = (id) => {
		updateRequestTasks(id, {
			title: value,
		});
		setEditableTask(null);
	};

	const taskList = tasks.map(({ id, title }) => {
		return (
			<div key={id}>
				{editableTask === id ? (
					<EditInputLayout
						id={id}
						value={value}
						setValue={setValue}
						saveTask={saveTask}
					/>
				) : (
					<TaskLayout
						title={title}
						id={id}
						setEditableTask={setEditableTask}
						setValue={setValue}
						deleteRequestTasks={deleteRequestTasks}
						editableTask={editableTask}
						getRequestTasks={getRequestTasks}
					/>
				)}
			</div>
		);
	});

	return (
		<TaskListLayout isLoading={isLoading} setIsSort={setIsSort}>
			{taskList.length ? taskList : <span>Список задач пуст</span>}
		</TaskListLayout>
	);
};
