import { ActionType } from './actions';
import { Actions } from './types';

import { Reducer } from 'redux';

interface State {
	open: boolean;
}
const initialState = {
	open: false
};

const navReducer: Reducer<State, ActionType> = (state = initialState, action) => {
	switch (action.type) {
		case Actions.NAVIGATION_CLOSED:
			return {
				...state,
				...action.payload
			};
		case Actions.NAVIGATION_OPENED:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default navReducer;
