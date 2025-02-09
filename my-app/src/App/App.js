import { ControlPanel, TasksList } from './Components';
import { INIT_APP_STATE } from './Constants';
import { ContextProvider } from './Context';
import { useAppState } from './Hooks';

export const App = () => {
	const { state, setPropertiesState } = useAppState(INIT_APP_STATE);

	return (
		<div>
			<ContextProvider appValue={{ state, setPropertiesState }}>
				<ControlPanel />
				<TasksList />
			</ContextProvider>
		</div>
	);
};
