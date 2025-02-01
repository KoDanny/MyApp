import { useCallback, useState } from 'react';

const setter = (state, updateData = {}) => {
	Object.keys(updateData).forEach((key) => {
		if (!(key in state)) {
			throw new Error(`State does not contain the property "${key}"`);
		}
	});
	return { ...state, ...updateData };
};

export const useAppState = (initState) => {
	const [state, setState] = useState(initState);

	const setPropertiesState = useCallback(
		(updateData = {}) => setState((prevState) => setter(prevState, updateData)),
		[],
	);

	return { state, setPropertiesState };
};
