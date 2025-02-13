import { useState } from 'react';
import { store } from '../store';

export const useAppState = () => {
	const { dispatch, getState, subscribe } = store;

	const [state, setState] = useState(getState());

	return {
		dispatch,
		update: () =>
			subscribe(() => setState((prevState) => ({ ...prevState, ...getState() }))),
		state,
	};
};
