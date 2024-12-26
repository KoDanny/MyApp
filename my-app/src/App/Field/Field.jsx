import { FieldLayout } from './FieldLayout/FieldLayout';
import PropTypes from 'prop-types';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const getWinPatternIndex = (field, winPatterns) => {
	return winPatterns.findIndex(
		([index1, index2, index3]) =>
			field[index1] !== '' && field[index1] === field[index2] && field[index2] === field[index3],
	);
};

export const Field = ({ field, currentPlayer, isGameEnded, setState, winPattern }) => {
	const handlerClick = (e) => {
		if (e.target.textContent || isGameEnded) return;

		const newState = {
			field,
		};

		const id = e.target.id;
		newState.field[id] = currentPlayer;

		const winPattern = getWinPatternIndex(field, WIN_PATTERNS);

		if (winPattern !== -1) {
			newState.isGameEnded = true;
			newState.winPattern = WIN_PATTERNS[winPattern];
		} else if (field.indexOf('') === -1) {
			newState.isDraw = true;
		} else {
			newState.currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}

		setState((prevState) => ({ ...prevState, ...newState }));
	};

	return <FieldLayout field={field} winPattern={winPattern} handlerClick={handlerClick} />;
};

Field.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	setState: PropTypes.func,
};

Field.defaultProps = {
	winPattern: [],
};
