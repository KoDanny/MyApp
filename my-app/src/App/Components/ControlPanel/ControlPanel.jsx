import { ControlPanelLayout } from './Layout/ControlPanelLayout';
import { useRequest } from '../../Hooks';

export const ControlPanel = ({
	state,
	state: { refreshFlag, inputAddValue, tasks },
	setPropertiesState,
}) => {
	console.log('Render ControlPanel');
	const { createTaskRequest } = useRequest();

	const handlers = {
		onAddInputChange: ({ target }) =>
			setPropertiesState({ inputAddValue: target.value }),

		onSearchInputChange: ({ target }) =>
			setPropertiesState({ inputSearchValue: target.value }),

		onSortCheckboxChange: ({ target }) =>
			setPropertiesState({
				isSortingEnable: target.checked,
				refreshFlag: !refreshFlag,
			}),

		onAddButtonClick: () => {
			if (inputAddValue === '') return;
			createTaskRequest({ title: inputAddValue });
			setPropertiesState({ refreshFlag: !refreshFlag, inputAddValue: '' });
		},

		onResetButtonClick: () => setPropertiesState({ tasks, inputSearchValue: '' }),
	};

	return <ControlPanelLayout {...{ state, handlers }} />;
};
