import {combineReducers} from 'redux';

import {reducer} from './User-reducer';

export const reducer = combineReducers({
		user: reducer,
		select: reducer
})