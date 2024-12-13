import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const initState = {
		steps: data,
		activeIndex: 0,
	};

	const [state, setState] = useState(initState);

	const isFirstStep = state.activeIndex === 0;
	const isLastStep = state.activeIndex === state.steps.length - 1;

	const handlerButtonNext = () => {
		const activeIndex = state.activeIndex + 1;
		setState({ ...state, activeIndex });
	};

	const handlerButtonBack = () => {
		const activeIndex = state.activeIndex - 1;
		setState({ ...state, activeIndex });
	};

	const handlerButtonStartOver = () => {
		const activeIndex = 0;
		setState({ ...state, activeIndex });
	};

	const { steps, activeIndex } = state;

	const listItems = steps.map(({ title, id }, index) => {
		const done = index <= activeIndex ? styles.done : '';
		const active = index === activeIndex ? styles.active : '';

		return (
			<li key={id} className={styles['steps-item'] + ' ' + done + ' ' + active}>
				<button
					className={styles['steps-item-button']}
					onClick={() => setState({ ...state, activeIndex: index })}
				>
					{index + 1}
				</button>
				{title}
			</li>
		);
	});

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex]?.content}</div>
					<ul className={styles['steps-list']}>{listItems}</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={handlerButtonBack} disabled={isFirstStep}>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? handlerButtonStartOver : handlerButtonNext}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
