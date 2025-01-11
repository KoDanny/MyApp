import { useRef } from 'react';
import { FormLayout, InputFieldLayout, Button } from './Layout/RegFormLayout';
import { useError, useForm, Validator } from './utils/utils';

export const FormCustom = () => {
	const { getFormState, setFieldValue } = useForm();
	const { getErrors, setFieldError } = useError();

	const { email, password, passwordConfirm, isFormValid } = getFormState();
	const errors = getErrors();

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (isFormValid) {
			const state = getFormState();
			console.log(state);
		}
	};

	const onFieldChange = ({ target: { name, value } }) => {
		setFieldError(name, null);
		setFieldValue(name, value);
	};

	const formValidator = new Validator(email, password, passwordConfirm);
	const buttonSubmitRef = useRef(null);

	const onFieldBlur = ({ target: { name } }) => {
		const error = formValidator.validate(name);
		setFieldError(name, error);

		if (email && password && passwordConfirm) {
			const isValid = formValidator.isFormValid();
			setFieldValue('isFormValid', isValid);

			if (isValid) {
				buttonSubmitRef.current.focus();
			}
		}
	};

	return (
		<FormLayout onSubmit={onFormSubmit}>
			<InputFieldLayout
				type="text"
				label="Адрес электронной почты"
				placeholder="Введите адрес электронной почты"
				value={email}
				name="email"
				errors={errors}
				onChange={onFieldChange}
				onBlur={onFieldBlur}
			/>
			<InputFieldLayout
				type="password"
				label="Пароль"
				placeholder="Введите пароль"
				value={password}
				name="password"
				onChange={onFieldChange}
				onBlur={onFieldBlur}
				errors={errors}
			/>
			<InputFieldLayout
				type="password"
				label="Подтверждение пароля"
				placeholder="Введите пароль повторно"
				value={passwordConfirm}
				name="passwordConfirm"
				onChange={onFieldChange}
				onBlur={onFieldBlur}
				errors={errors}
			/>
			<Button type="submit" disable={!isFormValid} ref={buttonSubmitRef}>
				Зарегистрироваться
			</Button>
		</FormLayout>
	);
};
