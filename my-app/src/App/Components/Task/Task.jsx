import { useNavigate, useParams } from 'react-router-dom';
import { TaskLayout } from './Layout/TaskLayout';
import { findTask } from '../../utils';
import { useEffect } from 'react';
import { useRequest } from '../../Hooks';

export const Task = ({
	state,
	state: { tasks, textareaTaskValue, refreshFlag, isLoading },
	setPropertiesState,
}) => {
	console.log('Render Task');
	const { deleteTaskRequest, updateTaskRequest } = useRequest();

	const params = useParams();
	const { title, id } = findTask(tasks, params.id);

	useEffect(
		() => setPropertiesState({ textareaTaskValue: title }),
		[title, setPropertiesState],
	);

	const navigate = useNavigate();

	const handlers = {
		onTaskTextareaChange: ({ target }) =>
			setPropertiesState({ textareaTaskValue: target.value }),

		onDeleteButtonClick: () => {
			setPropertiesState({ isLoading: true });
			deleteTaskRequest({ id })
				.then(() => setPropertiesState({ refreshFlag: !refreshFlag }))
				.then(() => navigate(-1))
				.finally(() => setPropertiesState({ isLoading: false }));
		},

		onUpdateButtonClick: () => {
			setPropertiesState({ isLoading: true });
			updateTaskRequest({ id, title: textareaTaskValue })
				.then(() => setPropertiesState({ refreshFlag: !refreshFlag }))
				.finally(() => setPropertiesState({ isLoading: false }));
		},

		goToBack: () => navigate(-1),
	};

	return <TaskLayout {...{ state, handlers }} />;
};
