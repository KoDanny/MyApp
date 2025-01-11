import { useForm } from 'react-hook-form';
import { useRef, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputFieldLayout, FormLayout, Button } from './Layout/RegFormLayout';
import { formValidationSchema } from './constants/formValidationScheme';

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		formState,
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(formValidationSchema),
		defaultValues: '',
	});

	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (formState.isValid) {
			submitButtonRef.current.focus();
		}
	}, [formState]);

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<FormLayout onSubmit={handleSubmit(onSubmit)}>
			<InputFieldLayout
				type="text"
				label="Адрес электронной почты"
				placeholder="Введите адрес электронной почты"
				errors={errors}
				{...register('email')}
			/>
			<InputFieldLayout
				type="password"
				label="Пароль"
				placeholder="Введите пароль"
				errors={errors}
				{...register('password')}
			/>
			<InputFieldLayout
				type="password"
				label="Подтверждение пароля"
				placeholder="Введите пароль повторно"
				errors={errors}
				{...register('passwordConfirm')}
			/>
			<Button type="submit" disable={!isValid} ref={submitButtonRef}>
				Зарегистрироваться
			</Button>
		</FormLayout>
	);
};
