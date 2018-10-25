import * as Types from './types';
import { ActionCreator } from 'redux';

const closeNavigation: ActionCreator<Types.MenuClosed> = () => ({
	payload: {
		open: false
	},
	type: Types.Actions.NAVIGATION_CLOSED
});

const openNavigation: ActionCreator<Types.MenuOpened> = () => ({
	payload: {
		open: true
	},
	type: Types.Actions.NAVIGATION_OPENED
});

const Actions = {
	closeNavigation,
	openNavigation
};

export type ActionType = ReturnType<typeof Actions[keyof typeof Actions]>;

export default Actions;
