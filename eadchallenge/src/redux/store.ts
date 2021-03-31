import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import usersReducer from './usersSlice';
import userByQueryReducer from './userByQuerySlice';
import dataGroupReducer from './dataGroupSlice';
import toggleReducer from './toggleSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		users: usersReducer,
		userByQuery: userByQueryReducer,
		dataGroup: dataGroupReducer,
		toggle: toggleReducer,
	},
});

export type RootUserState = { user: ReturnType<typeof userReducer> };
export type RootUsersState = { users: ReturnType<typeof usersReducer> };
export type RootUserByQueryState = {
	userByQuery: ReturnType<typeof userByQueryReducer>;
};

export type RootUserDataGroup = {
	dataGroup: ReturnType<typeof dataGroupReducer>;
};

export type RootToggleState = { toggle: ReturnType<typeof toggleReducer> };
