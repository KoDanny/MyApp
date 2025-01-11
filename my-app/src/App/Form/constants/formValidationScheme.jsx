import * as yup from 'yup';

export const formValidationSchema = yup.object().shape({
	email: yup
		.string()
		.required('Поле обязательно для заполнения')
		.email('Неверный формат email'),

	password: yup
		.string()
		.required('Поле обязательно для заполнения')
		.min(6, 'Пароль должен содержать не менее 6 символов')
		.max(10, 'Пароль должен содержать не более 10 символов'),

	passwordConfirm: yup
		.string()
		.required('Поле обязательно для заполнения')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
