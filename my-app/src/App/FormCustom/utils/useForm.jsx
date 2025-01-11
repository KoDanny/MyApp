import { useState } from 'react';
import { initFormState } from '../constants/initFormState';

export const useForm = () => {
	const [state, setState] = useState(initFormState);

	const getFormState = () => state;

	const setFieldValue = (fieldName, newValue) =>
		setState({ ...state, [fieldName]: newValue });

	return { getFormState, setFieldValue };
};
