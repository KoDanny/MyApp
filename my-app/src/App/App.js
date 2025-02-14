import { useEffect } from 'react';
import { Field, Information, ControlPanel } from './Components';
import { useAppState } from './Hooks';

export const App = () => {
	const {
		state: { isGameEnded },
		update,
	} = useAppState();

	useEffect(() => update(), [isGameEnded]);

	return (
		<div>
			<Information>Информация</Information>
			<Field />
			{isGameEnded && <ControlPanel />}
		</div>
	);
};

// ✖ ⭘
