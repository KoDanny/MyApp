import { INIT_STATE } from './Constants';

export const reducer = (state = INIT_STATE, { type, payload }) => {
	const startState = state;

	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };
		case 'SET_FIELD':
			return { ...state, field: payload };
		case 'SET_GAME_ENDED':
			return { ...state, isGameEnded: payload };
		case 'SET_WIN_PATTERN':
			return { ...state, winPattern: payload };
		case 'SET_DRAW':
			return { ...state, isDraw: payload };
		case 'RESET':
			return startState;
		default:
			return state;
	}
};
