import { Action } from 'redux';

export const enum Actions {
	NAVIGATION_CLOSED = '[menu] closed',
	NAVIGATION_OPENED = '[menu] opened'
}

export interface MenuOpened extends Action {
	payload: {
		open: boolean;
	};
	type: Actions.NAVIGATION_OPENED;
}

export interface MenuClosed extends Action {
	payload: {
		open: boolean;
	};
	type: Actions.NAVIGATION_CLOSED;
}
