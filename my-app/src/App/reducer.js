import { INIT_STATE } from './Constants';
import * as actionType from './Constants';

const appReducer = (state = INIT_STATE, { type, payload }) => {
	switch (type) {
		case actionType.SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: payload };
		case actionType.SET_FIELD:
			return { ...state, field: payload };
		case actionType.SET_GAME_ENDED:
			return { ...state, isGameEnded: payload };
		case actionType.SET_WIN_PATTERN:
			return { ...state, winPattern: payload };
		case actionType.SET_DRAW:
			return { ...state, isDraw: payload };
		default:
			return state;
	}
};

export const reducer = (state, { type, payload }) => {
	if (type === actionType.RESET) {
		state = undefined;
	}

	return appReducer(state, { type, payload });
};
