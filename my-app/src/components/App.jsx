import styles from './App.module.css';
import { useState } from 'react';
import { buttons } from './buttonsData';

export const App = () => {
	const initState = {
		operand1: '',
		operand2: '',
		operator: '',
		isResult: false,
	};

	const [state, setState] = useState(initState);

	function tapNumber(value) {
		if (state.isResult) return;

		if (!state.operator) {
			const operand1 = state.operand1 + value;
			setState({ ...state, operand1 });
		} else {
			const operand2 = state.operand2 + value;
			setState({ ...state, operand2 });
		}
	}

	function tapOperator(operator) {
		const newState = {
			isResult: false,
		};

		if (!state.operand1) {
			newState.operand1 = operator;
		} else {
			newState.operator = operator;
		}

		setState({ ...state, ...newState });
	}

	function tapReset() {
		setState({ ...state, ...initState });
	}

	function tapResult() {
		const { operand1, operand2, operator } = state;
		const newState = {
			operand1: '',
			operand2: '',
			operator: '',
			isResult: true,
		};

		switch (operator) {
			case '+':
				newState.operand1 = Number(operand1) + Number(operand2);
				break;
			case '-':
				newState.operand1 = Number(operand1) - Number(operand2);
				break;
			default:
				return;
		}

		setState({ ...state, ...newState });
	}

	function handlerCalc(e) {
		const { value, btnType } = e.target.dataset;
		if (!btnType) return;

		switch (btnType) {
			case 'number':
				tapNumber(value);
				return;
			case 'operator':
				tapOperator(value);
				return;
			case 'result':
				tapResult();
				return;
			default:
				tapReset();
		}
	}

	const buttonsElem = buttons.map(({ value, type, id }) => (
		<button className={styles.btn + ' ' + styles[type]} data-btn-type={type} data-value={value} key={id}>
			{value}
		</button>
	));

	const { operand1, operator, operand2, isResult } = state;

	return (
		<div className={styles.calcContainer}>
			<div className={styles.calc} onClick={(e) => handlerCalc(e)}>
				<div className={styles.screen + ' ' + (isResult && styles.screenResult)}>
					{operand1 + ' ' + operator + ' ' + operand2}
				</div>
				<div className={styles.buttonsContainer}>{buttonsElem}</div>
			</div>
		</div>
	);
};
