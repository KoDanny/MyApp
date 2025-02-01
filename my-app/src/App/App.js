import { Route, Routes } from 'react-router-dom';
import { useAppState } from './Hooks';
import { INIT_STATE } from './constants';
import { Task, NotFound, MainPage } from './Components';

export const App = () => {
	const props = useAppState(INIT_STATE);
	console.log('Render App');

	return (
		<Routes>
			<Route path="/" element={<MainPage {...props} />}></Route>
			<Route path="/tasks/:id" element={<Task {...props} />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
