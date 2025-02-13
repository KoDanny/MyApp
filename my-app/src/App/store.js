import { INIT_STATE } from './Constants';
import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer, INIT_STATE);
