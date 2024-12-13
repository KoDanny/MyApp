import { useState } from 'react';
import styles from './App.module.css';

const getDate = () => {
	const date = new Date();
	const stringDate = date.toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});
	const stringTime = date.toLocaleTimeString('ru-RU');

	return `(${stringDate} ${stringTime})`;
};

export const App = () => {
	const initState = {
		value: '',
		list: [],
		error: '',
		isValueValid: false,
	};

	const [state, setState] = useState(initState);

	const onInputButtonClick = () => {
		const value = (prompt('Введите значение') || '').trim();
		const error = 'Введенное значение должно содержать минимум 3 символа';

		const isValueValid = value.length >= 3;
		const newState = isValueValid ? { value, error: '' } : { value: '', error };

		setState({ ...state, ...newState, isValueValid });
	};

	const onAddButtonClick = () => {
		if (!state.isValueValid) return;
		const list = [
			...state.list,
			{
				id: Date.now(),
				value: state.value,
				date: getDate(),
			},
		];

		const newState = {
			list,
			value: '',
			error: '',
			isValueValid: false,
		};

		setState({ ...state, ...newState });
	};

	const { error, value, list, isValueValid } = state;

	const listElem = (
		<ul className={styles.list}>
			{list.map(({ id, value, date }) => (
				<li className={styles.listItem} key={id}>
					{value} {date}
				</li>
			))}
		</ul>
	);

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			{value !== '' && (
				<p className={styles.noMarginText}>
					Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
				</p>
			)}
			{state.error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length === 0 ? <p className={styles.noMarginText}>Нет добавленных элементов</p> : listElem}
			</div>
		</div>
	);
};
