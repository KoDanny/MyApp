import { useState } from 'react';
import { initFormErrors } from '../constants/initFormErrors';

export const useError = () => {
	const [errors, setErrors] = useState(initFormErrors);

	const getErrors = () => errors;
	const setFieldError = (fieldName, error) => {
		setErrors({ ...errors, [fieldName]: error });
	};

	return {
		getErrors,
		setFieldError,
		setErrors,
	};
};
