import {
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_DRAW,
	SET_GAME_ENDED,
	SET_WIN_PATTERN,
	RESET,
} from './Constants';

const makeAction = (type) => (payload) => ({
	type,
	payload,
});

export const setCurrentPlayer = makeAction(SET_CURRENT_PLAYER);
export const setField = makeAction(SET_FIELD);
export const setGameEnded = makeAction(SET_GAME_ENDED);
export const setDraw = makeAction(SET_DRAW);
export const reset = makeAction(RESET);
export const setWinPattern = makeAction(SET_WIN_PATTERN);
